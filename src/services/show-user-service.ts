import { injectable, inject } from "tsyringe";
import ShowUserInput from "../dtos/inputs/show-users-input";
import ICreateUserRepository from "../Modules/Users/Repositories/ICreateUserRepository";

@injectable()
class ShowUserService {
  constructor(
    @inject("UsersRepository")
    private users_repository: ICreateUserRepository
  ) {}

  public execute = async (data: ShowUserInput) => {
    const user = await this.users_repository.findOne(data);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };
}

export default ShowUserService;
