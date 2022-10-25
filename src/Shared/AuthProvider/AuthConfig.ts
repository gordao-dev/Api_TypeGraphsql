export type IAuthProviders = 'jwt';

export interface IAuthConfig {
  provider: IAuthProviders;
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export const authConfig: IAuthConfig = {
  provider: (process.env.AUTH_PROVIDER as IAuthProviders) || 'jwt',
  jwt: {
    secret: process.env.AUTH_JWT_SECRET || '',
    expiresIn: '1d',
  },
};

export default authConfig;
