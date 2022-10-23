import { PrismaClient } from "@prisma/client";
import CreateUserInput from "../DTOs/inputs/CreateUserInput";
import ShowUserInput from "../DTOs/inputs/ShowUserrInput";
import User from "../DTOs/models/UserModels";
import ICreateUserRepository from "./ICreateUserRepository";

class UsersRepository implements ICreateUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public create = async (data: CreateUserInput): Promise<User> => {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  };

  public findOne = async (filter: ShowUserInput): Promise<User | null> => {
    const user = await this.prisma.user.findFirst({
      where: filter,
    });

    if (!user) {
      return null;
    }

    return user;
  };
}

export default UsersRepository;
