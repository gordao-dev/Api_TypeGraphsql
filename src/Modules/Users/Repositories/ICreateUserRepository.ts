import CreateUserInput from "../DTOs/inputs/CreateUserInput";
import User from "../DTOs/models/UserModels";

interface IUsersRepository {
  create(data: CreateUserInput): Promise<User>;
}

export default IUsersRepository;
