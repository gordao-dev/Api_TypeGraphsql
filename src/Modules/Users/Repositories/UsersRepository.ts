import { PrismaClient } from '@prisma/client';

import IUsersRepository from './IUsersRepository';
import User from '../Models/User';
import ICreateUser from '../Interfaces/ICreateUser';
import IFilterUser from '../Interfaces/IFIlterUser';

class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public create = async (data: ICreateUser): Promise<User> => {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  };

  public findOne = async (filter: IFilterUser): Promise<User | null> => {
    const user = await this.prisma.user.findFirst({
      where: filter,
    });

    if (!user) {
      return null;
    }

    return user;
  };

  public update = async (user: User): Promise<void> => {
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  };
}

export default UsersRepository;
