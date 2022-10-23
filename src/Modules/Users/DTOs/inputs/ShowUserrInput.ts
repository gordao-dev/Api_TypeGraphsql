import { Field, InputType } from "type-graphql";

@InputType()
export class ShowUserInput {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}

export default ShowUserInput;
