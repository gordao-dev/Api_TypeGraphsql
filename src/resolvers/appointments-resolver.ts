import { ApolloError } from "apollo-server";
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/custumer-model";

@Resolver(() => Appointment)
export class AppontmentsResolver {
  @Query(() => Appointment)
  async appointements() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appointment)
  async CreateAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      name: data.name,
      start_date: data.start_date,
      start_date_registration: data.start_date_registration,
      end_date_registration: data.end_date_registration,
      additional_information: data.additional_information,
      start_place: data.start_place,
      participants_limit: data.participants_limit,
    };

    return appointment;
  }
  @FieldResolver(() => Customer)
  async customer(@Root() appointement: Appointment) {
    console.log(appointement);

    return {
      name: appointement,
    };
  }
}
