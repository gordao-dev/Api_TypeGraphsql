import IFilterRide from '../Interfaces/IFilterRide';
import ICreateRide from '../Interfaces/ICreateRide';
import Ride from '../Models/Ride';

interface IRidesRepository {
  create(data: ICreateRide): Promise<Ride>;
  findOne(filter: IFilterRide): Promise<Ride | null>;
  find(filter: IFilterRide): Promise<Ride[]>;
}

export default IRidesRepository;
