import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CriarPedaladaInput {
  @Field()
  name: String;

  @Field()
  start_date: Date;

  @Field()
  start_date_registration: Date;

  @Field()
  end_date_registration: Date;

  @Field()
  additional_information: String;

  @Field()
  start_place: String;

  @Field()
  participants_limit: Number;
}

export default CriarPedaladaInput;
