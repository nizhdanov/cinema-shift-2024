import { api } from '@/api';
import { SignInResponse } from '@/types';
import CredentialsProvider from '@auth/core/providers/credentials';
import { NextAuthConfig } from 'next-auth';

export default {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/mobile/login'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        phone: {},
        code: {}
      },

      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.code) return null;
        const response: SignInResponse = await api.fetch('/users/signin', {
          method: 'POST',
          body: JSON.stringify(credentials)
        });

        if (response.success) {
          return response.user;
        }

        return null;
      }
    })
  ],

  callbacks: {
    // async session({ token, session,  }) {
    //   return session;
    // }
  }
} satisfies NextAuthConfig;
