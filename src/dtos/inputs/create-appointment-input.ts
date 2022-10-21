import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
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
  endsAt: Date;
}
