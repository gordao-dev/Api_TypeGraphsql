import { container } from "tsyringe";
import ICreateUserRepository from "../../Repositories/ICreateUserRepository";
import UsersRepository from "../../Repositories/UsersRepository";

class UsersInjections {
  public register(): void {
    container.registerSingleton<ICreateUserRepository>(
      "UsersRepository",
      UsersRepository
    );
  }
}

export default UsersInjections;
