import authConfig from './auth.config';
import { auth } from '@auth';
import NextAuth from 'next-auth';

export const { auth: middleware } = NextAuth(authConfig);

export default auth((req) => {
  // req.auth
});

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },
    '/mobile/profile',
    '/mobile/tickets'
  ]
};
