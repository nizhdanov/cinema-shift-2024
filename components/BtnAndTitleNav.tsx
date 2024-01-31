'use client';

import { Button } from '@/ui';
import { useRouter } from 'next/navigation';

interface BtnAndTitleNavProps {
  title?: string;
  children: React.ReactNode;
}

const BtnAndTitleNav = ({ title, children }: BtnAndTitleNavProps) => {
  const router = useRouter();

  return (
    <div className='sticky top-0 z-50 flex h-14 flex-row items-center gap-8 bg-white p-4 sm:hidden'>
      <Button variant={'ghost'} size={'icon'} onClick={() => router.back()}>
        {children}
      </Button>
      <h2 className='text-2xl font-bold leading-loose text-gray-900'>{title}</h2>
    </div>
  );
};

export { BtnAndTitleNav };