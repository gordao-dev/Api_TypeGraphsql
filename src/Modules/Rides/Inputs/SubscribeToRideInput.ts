import { Field, InputType } from 'type-graphql';

@InputType()
export class SubscribeToRideInput {
  @Field()
  ride_id: number;
}

export default SubscribeToRideInput;
