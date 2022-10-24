import { container } from "tsyringe";
import IUsersRepository from "../../Repositories/ICreateUserRepository";
import UsersRepository from "../../Repositories/UsersRepository";
class UsersInjections {
  static register() {
    throw new Error("Method not implemented.");
  }
  public register = () => {
    container.registerSingleton<IUsersRepository>(
      "UsersRepository",
      UsersRepository
    );
  };
}

export default UsersInjections;
