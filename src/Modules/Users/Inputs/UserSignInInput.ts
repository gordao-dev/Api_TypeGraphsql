import { Field, InputType } from 'type-graphql';

@InputType()
export class UserSignInInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

export default UserSignInInput;
