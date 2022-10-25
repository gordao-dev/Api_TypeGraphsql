import { container } from 'tsyringe';

import IAuth from './IAuth';
import JwtAuth from './JwtAuth';

class AuthInjections {
  public register(): void {
    container.registerSingleton<IAuth>('Auth', JwtAuth);
  }
}

export default AuthInjections;
