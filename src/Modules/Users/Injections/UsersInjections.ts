import { container } from 'tsyringe';

import IUsersRepository from '../Repositories/IUsersRepository';
import UsersRepository from '../Repositories/UsersRepository';

class UsersInjections {
  public register(): void {
    container.registerSingleton<IUsersRepository>(
      'UsersRepository',
      UsersRepository,
    );
  }
}

export default UsersInjections;
