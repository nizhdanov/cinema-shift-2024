import '../styles/globals.css';
import { inter } from '@/ui';
import { cn } from '@/utils';
import { auth } from '@auth';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Cinema Shift 2024',
  description: 'Generated by create next app'
};

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  const session = await auth();

  return (
    <html lang='en'>
      <body className={cn(inter.className, 'mx-auto max-w-[960px]')}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
