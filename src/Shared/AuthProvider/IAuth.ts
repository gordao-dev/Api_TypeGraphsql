import IAuthDecodeResponse from './IAuthDecodeResponse';
import IAuthEncode from './IAuthEncodeRequest';

interface IAuth {
  encode(data: IAuthEncode): Promise<string>;
  decode(token: string): Promise<IAuthDecodeResponse>;
}

export default IAuth;
