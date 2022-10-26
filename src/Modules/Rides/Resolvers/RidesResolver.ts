import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { container } from 'tsyringe';

import CreateRideService from '../Services/CreateRideService';
import CheckAuth from '../../Users/Services/CheckAuth';
import CreateRideInput from '../Inputs/CreateRideInput';
import Ride from '../Models/Ride';
import IndexAvailableRidesService from '../Services/IndexAvailableRidesService';
import IndexSubscribedRidesService from '../Services/IndexSubscribedRidesService';

@Resolver(() => Ride)
export class RidesResolver {
  @Mutation(() => Ride)
  public async create_ride(
    @Arg('data') data: CreateRideInput,
    @Arg('token') token: string,
  ): Promise<Ride> {
    const checkAuth = container.resolve(CheckAuth);
    const actor = await checkAuth.execute(token);

    const createRideService = container.resolve(CreateRideService);
    const { ride } = await createRideService.execute({
      actor,
      data,
    });

    return ride;
  }

  @Query(() => [Ride])
  public async index_available_rides(
    @Arg('token') token: string,
  ): Promise<Ride[]> {
    const checkAuth = container.resolve(CheckAuth);
    await checkAuth.execute(token);

    const indexAvailableRidesService = container.resolve(
      IndexAvailableRidesService,
    );
    const { rides } = await indexAvailableRidesService.execute();

    return rides;
  }

  @Query(() => [Ride])
  public async index_subscribed_rides(
    @Arg('token') token: string,
  ): Promise<Ride[]> {
    const checkAuth = container.resolve(CheckAuth);
    const actor = await checkAuth.execute(token);

    const indexSubscribedRidesService = container.resolve(
      IndexSubscribedRidesService,
    );
    const { rides } = await indexSubscribedRidesService.execute({
      actor,
    });

    return rides;
  }
}

export default RidesResolver;
