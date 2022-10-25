import { inject, injectable } from 'tsyringe';

import { isAfter } from 'date-fns';
import IRidesRepository from '../Repositories/IRidesRepository';
import Ride from '../Models/Ride';
import User from '../../Users/Models/User';
import Appointment from '../Models/Appointment';
import IAppointmentsRepository from '../Repositories/IAppointmentsRepository';
import SubscribeToRideInput from '../Inputs/SubscribeToRideInput';

interface IRequest {
  actor: User;
  data: SubscribeToRideInput;
}

interface IResponse {
  ride: Ride;
  appointment: Appointment;
}

@injectable()
class SubscribeToRideService {
  constructor(
    @inject('RidesRepository')
    private ridesRepository: IRidesRepository,

    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ actor, data }: IRequest): Promise<IResponse> {
    const ride = await this.ridesRepository.findOne({
      id: data.ride_id,
    });

    if (!ride) {
      throw Error('Ride not found');
    }

    if (isAfter(new Date(), ride.end_date_registration)) {
      throw Error(
        "It's not possible to subscribe to this ride because the registrarion period has already ended",
      );
    }

    let appointment = await this.appointmentsRepository.findOne({
      ride_id: ride.id,
      user_id: actor.id,
    });
    if (appointment) {
      throw Error('You are already subscribed to this ride');
    }

    appointment = await this.appointmentsRepository.create({
      ride_id: ride.id,
      user_id: actor.id,
      subscription_date: new Date(),
    });

    return {
      ride,
      appointment,
    };
  }
}

export default SubscribeToRideService;
