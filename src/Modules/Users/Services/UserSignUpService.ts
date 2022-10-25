import { inject, injectable } from 'tsyringe';

import ICypher from '../../../Shared/CypherProvider/ICypher';
import UserSignUpInput from '../Inputs/UserSignUpInput';
import User from '../Models/User';
import IUsersRepository from '../Repositories/IUsersRepository';

interface IResponse {
  user: User;
}

@injectable()
class UserSignUpService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('Cypher')
    private cypher: ICypher,
  ) {}

  public async execute({
    email,
    password,
    name,
  }: UserSignUpInput): Promise<IResponse> {
    const emailInUse = await this.usersRepository.findOne({
      email,
    });
    if (emailInUse) {
      throw new Error('This email is already in use by another user');
    }

    const hashedPassword = await this.cypher.hashify(password);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return {
      user,
    };
  }
}

export default UserSignUpService;
