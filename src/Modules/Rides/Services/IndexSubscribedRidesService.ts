import { inject, injectable } from 'tsyringe';

import IRidesRepository from '../Repositories/IRidesRepository';
import Ride from '../Models/Ride';
import User from '../../Users/Models/User';

interface IRequest {
  actor: User;
}

interface IResponse {
  rides: Ride[];
}

@injectable()
class IndexSubscribedRidesService {
  constructor(
    @inject('RidesRepository')
    private ridesRepository: IRidesRepository,
  ) {}

  public async execute({ actor }: IRequest): Promise<IResponse> {
    const rides = await this.ridesRepository.find({
      appointments: {
        user_id: actor.id,
      },
    });

    return {
      rides,
    };
  }
}

export default IndexSubscribedRidesService;
