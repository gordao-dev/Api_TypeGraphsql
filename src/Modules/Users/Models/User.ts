import { Field, ObjectType } from 'type-graphql';

import Ride from '../../Rides/Models/Ride';
import Appointment from '../../Rides/Models/Appointment';

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

  @Field({ nullable: true })
  token?: string;

  @Field(() => [Appointment], { nullable: true })
  appointments?: Appointment[];

  @Field(() => [Ride], { nullable: true })
  created_rides?: Ride[];
}

export default User;
