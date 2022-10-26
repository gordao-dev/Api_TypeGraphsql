import { PrismaClient } from '@prisma/client';

import IRidesRepository from './IRidesRepository';
import Ride from '../Models/Ride';
import ICreateRide from '../Interfaces/ICreateRide';
import IFilterRide from '../Interfaces/IFilterRide';

class RidesRepository implements IRidesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public create = async (data: ICreateRide): Promise<Ride> => {
    const ride = await this.prisma.ride.create({
      data,
    });

    return ride;
  };

  public findOne = async (filter: IFilterRide): Promise<Ride | null> => {
    const ride = await this.prisma.ride.findFirst({
      where: filter,
      include: {
        appointments: true,
      },
    });

    if (!ride) {
      return null;
    }

    return ride;
  };

  public find = async ({
    appointments,
    ...rest
  }: IFilterRide): Promise<Ride[]> => {
    const rides = await this.prisma.ride.findMany({
      where: appointments
        ? {
            ...rest,
            appointments: {
              every: {
                ...appointments,
              },
            },
          }
        : rest,
    });

    return rides;
  };
}

export default RidesRepository;
