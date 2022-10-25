import { Field, ObjectType } from 'type-graphql';
import User from '../../Users/Models/User';
import Ride from './Ride';

@ObjectType()
export class Appointment {
  @Field()
  ride_id: number;

  @Field()
  user_id: number;

  @Field()
  subscription_date: Date;

  @Field(() => Ride, { nullable: true })
  ride?: Ride;

  @Field(() => User, { nullable: true })
  user?: User;
}

export default Appointment;
