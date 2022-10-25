import { Arg, Mutation, Resolver } from 'type-graphql';
import { container } from 'tsyringe';

import CheckAuth from '../../Users/Services/CheckAuth';
import Appointment from '../Models/Appointment';
import SubscribeToRideInput from '../Inputs/SubscribeToRideInput';
import SubscribeToRideService from '../Services/SubscribeToRideService';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Mutation(() => Appointment)
  public async subscribe_to_ride(
    @Arg('data') data: SubscribeToRideInput,
    @Arg('token') token: string,
  ): Promise<Appointment> {
    const checkAuth = container.resolve(CheckAuth);
    const actor = await checkAuth.execute(token);

    const subscribeToRideService = container.resolve(SubscribeToRideService);
    const { appointment } = await subscribeToRideService.execute({
      actor,
      data,
    });

    return appointment;
  }
}

export default AppointmentsResolver;
