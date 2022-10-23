import { Field, ObjectType } from "type-graphql";

import { Appointment } from "../../../dtos/models/appointment-model";

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Appointment], { nullable: true })
  appointments?: Appointment[];

  // @Field()
  // created_rides?: Ride[];
}

export default User;
