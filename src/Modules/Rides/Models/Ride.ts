import { Field, ObjectType } from 'type-graphql';

import User from '../../Users/Models/User';
import Appointment from './Appointment';

@ObjectType()
export class Ride {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  start_date: Date;

  @Field()
  start_date_registration: Date;

  @Field()
  end_date_registration: Date;

  @Field({ nullable: true })
  additional_information?: string;

  @Field()
  start_place: string;

  @Field({ nullable: true })
  participants_limit?: number;

  @Field()
  creator_user_id: number;

  @Field(() => User, { nullable: true })
  creator_user?: User;

  @Field(() => [Appointment], { nullable: true })
  appointments?: Appointment[];
}

export default Ride;
