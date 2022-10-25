import { inject, injectable } from 'tsyringe';

import IRidesRepository from '../Repositories/IRidesRepository';
import Ride from '../Models/Ride';
import IAppointmentsRepository from '../Repositories/IAppointmentsRepository';
import User from '../../Users/Models/User';
import CreateRideInput from '../Inputs/CreateRideInput';

interface IRequest {
  data: CreateRideInput;
  actor: User;
}

interface IResponse {
  ride: Ride;
}

@injectable()
class CreateRideService {
  constructor(
    @inject('RidesRepository')
    private ridesRepository: IRidesRepository,

    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ actor, data }: IRequest): Promise<IResponse> {
    const ride = await this.ridesRepository.create({
      ...data,
      creator_user_id: actor.id,
    });

    await this.appointmentsRepository.create({
      ride_id: ride.id,
      user_id: actor.id,
      subscription_date: new Date(),
    });

    return {
      ride,
    };
  }
}

export default CreateRideService;
