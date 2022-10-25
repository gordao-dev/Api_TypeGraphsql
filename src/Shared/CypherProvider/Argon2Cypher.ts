import argon2 from 'argon2';

import ICypher from './ICypher';

class Argon2Cypher implements ICypher {
  public async hashify(data: string): Promise<string> {
    const hash = await argon2.hash(data, {
      saltLength: 10,
    });
    return hash;
  }

  public async compare(data: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, data);
    } catch (err) {
      return false;
    }
  }
}

export default Argon2Cypher;
