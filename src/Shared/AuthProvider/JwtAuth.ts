import { sign, verify } from 'jsonwebtoken';

import authConfig from './AuthConfig';
import IAuth from './IAuth';
import IAuthDecodeResponse from './IAuthDecodeResponse';
import IAuthEncode from './IAuthEncodeRequest';

class JwtAuth implements IAuth {
  public encode = async ({
    payload,
    subject,
  }: IAuthEncode): Promise<string> => {
    const token = sign(payload || {}, authConfig.jwt.secret, {
      subject,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return token;
  };

  public decode = async (token: string): Promise<IAuthDecodeResponse> => {
    const payload = verify(token, authConfig.jwt.secret);

    if (typeof payload === 'string') {
      throw new Error('Payload is not allowed to be a string');
    }

    return {
      payload,
    };
  };
}

export default JwtAuth;
