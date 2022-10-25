import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateRideInput {
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
}

export default CreateRideInput;
