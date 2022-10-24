import { container } from "tsyringe";
import ICreatePedaladasRepository from "../../Repositories/ICreatePedaladasRepository";
import UsersRepository from "../../Repositories/UsersRepository";
class UsersInjections {
  static register() {
    throw new Error("Method not implemented.");
  }
  public register = () => {
    container.registerSingleton<ICreatePedaladasRepository>(
      "UsersRepository",
      UsersRepository
    );
  };
}

export default UsersInjections;
