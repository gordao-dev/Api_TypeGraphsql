import UserSignUpInput from '../Inputs/UserSignUpInput';
import ICreateUser from '../Interfaces/ICreateUser';
import User from '../Models/User';

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findOne(filter: UserSignUpInput): Promise<User | null>;
  update(user: User): Promise<void>;
}

export default IUsersRepository;
