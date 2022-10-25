import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../Repositories/IUsersRepository';
import IAuth from '../../../Shared/AuthProvider/IAuth';
import User from '../Models/User';

@injectable()
class CheckAuth {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('Auth')
    private auth: IAuth,
  ) {}

  public execute = async (token: string): Promise<User> => {
    let userId = '';
    try {
      const { payload } = await this.auth.decode(token);
      if (!payload.sub || typeof payload.sub !== 'string') {
        throw Error('Invalid auth token');
      }
      userId = payload.sub;
    } catch (err) {
      throw new Error('Invalid auth token');
    }

    const user = await this.usersRepository.findOne({
      id: Number(userId),
    });
    if (!user) {
      throw new Error('User not found');
    }

    if (!user.token) {
      throw new Error('Token already expired');
    }

    return user;
  };
}

export default CheckAuth;
