import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { container } from 'tsyringe';

import User from '../Models/User';
import UserSignUpInput from '../Inputs/UserSignUpInput';
import UserSignUpService from '../Services/UserSignUpService';
import UserSignInInput from '../Inputs/UserSignInInput';
import UserSignInService from '../Services/UserSignInService';
import CheckAuth from '../Services/CheckAuth';

@Resolver(() => User)
export class UsersResolver {
  @Mutation(() => User)
  public async user_sign_up(@Arg('data') data: UserSignUpInput): Promise<User> {
    const userSignUpService = container.resolve(UserSignUpService);
    const { user } = await userSignUpService.execute(data);
    return user;
  }

  @Mutation(() => User)
  public async user_sign_in(@Arg('data') data: UserSignInInput): Promise<User> {
    const userSignInService = container.resolve(UserSignInService);
    const { user } = await userSignInService.execute(data);
    return user;
  }

  @Query(() => User)
  public async me(@Arg('token') token: string): Promise<User> {
    const checkAuth = container.resolve(CheckAuth);
    const user = await checkAuth.execute(token);
    return user;
  }
}

export default UsersResolver;
