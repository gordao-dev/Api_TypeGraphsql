import { inject, injectable } from 'tsyringe';

import IRidesRepository from '../Repositories/IRidesRepository';
import Ride from '../Models/Ride';

interface IResponse {
  rides: Ride[];
}

@injectable()
class IndexAvailableRidesService {
  constructor(
    @inject('RidesRepository')
    private ridesRepository: IRidesRepository,
  ) {}

  public async execute(): Promise<IResponse> {
    const rides = await this.ridesRepository.find({});

    return {
      rides,
    };
  }
}

export default IndexAvailableRidesService;
