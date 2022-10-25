import { container } from 'tsyringe';
import AppointmentsRepository from '../Repositories/AppointmentsRepository';
import IAppointmentsRepository from '../Repositories/IAppointmentsRepository';
import IRidesRepository from '../Repositories/IRidesRepository';
import RidesRepository from '../Repositories/RidesRepository';

class RidesInjections {
  public register(): void {
    container.registerSingleton<IRidesRepository>(
      'RidesRepository',
      RidesRepository,
    );

    container.registerSingleton<IAppointmentsRepository>(
      'AppointmentsRepository',
      AppointmentsRepository,
    );
  }
}

export default RidesInjections;
