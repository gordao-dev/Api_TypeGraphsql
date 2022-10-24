import { Field, InputType } from "type-graphql";

@InputType()
export class ShowUserInput {
  @Field({ nullable: true })
  id?: Number;

  @Field({ nullable: true })
  name?: String;

  @Field({ nullable: true })
  email?: String;
}

export default ShowUserInput;
