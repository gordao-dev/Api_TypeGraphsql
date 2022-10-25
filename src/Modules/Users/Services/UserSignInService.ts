import { inject, injectable } from 'tsyringe';

import User from '../Models/User';
import ICypher from '../../../Shared/CypherProvider/ICypher';
import IUsersRepository from '../Repositories/IUsersRepository';
import IAuth from '../../../Shared/AuthProvider/IAuth';
import UserSignInInput from '../Inputs/UserSignInInput';

interface IResponse {
  user: User;
}

@injectable()
class UserSignInService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('Cypher')
    private cypher: ICypher,

    @inject('Auth')
    private auth: IAuth,
  ) {}

  public async execute({
    email,
    password,
  }: UserSignInInput): Promise<IResponse> {
    const user = await this.usersRepository.findOne({
      email,
    });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await this.cypher.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = await this.auth.encode({
      subject: user.id.toString(),
    });
    user.token = token;
    await this.usersRepository.update(user);

    return {
      user,
    };
  }
}

export default UserSignInService;
