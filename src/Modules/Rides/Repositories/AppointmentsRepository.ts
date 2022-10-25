import { PrismaClient } from '@prisma/client';

import IAppointmentsRepository from './IAppointmentsRepository';
import Appointment from '../Models/Appointment';
import ICreateAppointment from '../Interfaces/ICreateAppointment';
import IFilterAppointment from '../Interfaces/IFilterAppointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public create = async (data: ICreateAppointment): Promise<Appointment> => {
    const appointment = await this.prisma.appointment.create({
      data,
    });

    return appointment;
  };

  public findOne = async (
    filter: IFilterAppointment,
  ): Promise<Appointment | null> => {
    const appointment = await this.prisma.appointment.findFirst({
      where: filter,
    });

    if (!appointment) {
      return null;
    }

    return appointment;
  };
}

export default AppointmentsRepository;
