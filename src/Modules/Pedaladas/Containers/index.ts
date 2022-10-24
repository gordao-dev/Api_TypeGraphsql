import { Field, ObjectType } from "type-graphql";
import { Appointment } from "../../../dtos/models/appointment-model";
import Pedalada from "../DTOs/models/PedaladasModels";

@ObjectType()
export class pedaladas {
  @Field()
  name: String;

  @Field()
  start_date: Date;

  @Field()
  start_date_registration: Date;

  @Field()
  end_date_registration: Date;

  @Field()
  additional_information?: String;

  @Field()
  start_place: String;

  @Field()
  participants_limit: Number;

  @Field(() => [Appointment], { nullable: true })
  pedaladas?: Appointment[];
}

export default pedaladas;
