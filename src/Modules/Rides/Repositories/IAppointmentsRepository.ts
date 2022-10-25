import ICreateAppointment from '../Interfaces/ICreateAppointment';
import IFilterAppointment from '../Interfaces/IFilterAppointment';
import Appointment from '../Models/Appointment';

interface IAppointmentsRepository {
  create(data: ICreateAppointment): Promise<Appointment>;
  findOne(filter: IFilterAppointment): Promise<Appointment | null>;
}

export default IAppointmentsRepository;
