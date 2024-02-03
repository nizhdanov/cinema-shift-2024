'use client';

import { Button } from '@/ui';
import { useRouter } from 'next/navigation';

interface MobileHeader {
  title?: string;
  children: React.ReactNode;
  close?: boolean;
}

const MobileHeader = ({ title, children, close }: MobileHeader) => {
  const { back, push } = useRouter();

  return (
    <header className='sticky top-0 z-50 mb-6 flex h-14 flex-row items-center gap-8 bg-white p-4'>
      <Button variant={'ghost'} size={'icon'} onClick={() => (close ? push('/') : back())}>
        {children}
      </Button>
      <h2 className='text-2xl font-bold leading-loose text-gray-900'>{title}</h2>
    </header>
  );
};

export { MobileHeader };
