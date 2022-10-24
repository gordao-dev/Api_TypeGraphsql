import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { container } from "tsyringe";

import { CreateUserInput } from "../dtos/inputs/create-user-inputs";

import CreateUserService from "../services/create-user-service";
import ShowUserInput from "../dtos/inputs/show-users-input";
import User from "../dtos/models/user-model";
import ShowUserService from "../services/show-user-service";

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  public async show_user(@Arg("data") data: ShowUserInput) {
    const showUserService = container.resolve(ShowUserService);
    const user = await showUserService.execute(data);
    return user;
  }

  @Mutation(() => User)
  public async create_user(@Arg("data") data: CreateUserInput) {
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute(data);
    return user;
  }
}

export default UsersResolver;
