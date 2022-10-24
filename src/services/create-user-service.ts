import { injectable, inject } from "tsyringe";
import { CreateUserInput } from "../dtos/inputs/create-user-inputs";
import ICreateUserRepository from "../Modules/Users/Repositories/ICreateUserRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private users_repository: ICreateUserRepository
  ) {}

  public execute = async (data: CreateUserInput) => {
    const user = await this.users_repository.create(data);

    return user;
  };
}

export default CreateUserService;
