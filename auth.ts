import authConfig from './auth.config';
import NextAuth from 'next-auth';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig);
