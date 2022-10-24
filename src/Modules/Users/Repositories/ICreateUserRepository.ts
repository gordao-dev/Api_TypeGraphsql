import ShowUserInput from "../../../dtos/inputs/show-users-input";
import CreateUserInput from "../DTOs/inputs/CreateUserInput";
import User from "../DTOs/models/UserModels";

interface IUsersRepository {
  findOne(data: ShowUserInput): Promise<User | null>;
  create(data: CreateUserInput): Promise<User>;
}

export default IUsersRepository;
