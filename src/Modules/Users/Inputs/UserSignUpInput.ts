import { Field, InputType } from 'type-graphql';

@InputType()
export class UserSignUpInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export default UserSignUpInput;
