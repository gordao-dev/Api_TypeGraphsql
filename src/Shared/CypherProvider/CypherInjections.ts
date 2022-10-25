import { container } from 'tsyringe';

import Argon2Cypher from './Argon2Cypher';
import ICypher from './ICypher';

class CypherInjections {
  public register(): void {
    container.registerSingleton<ICypher>('Cypher', Argon2Cypher);
  }
}

export default CypherInjections;
