'use client';

import { ArrowBack } from '@/icons';
import { Button } from '@/ui';
import { useRouter } from 'next/navigation';

const MobileTitle = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row items-center gap-8  p-4'>
      <Button variant={'ghost'} size={'icon'} onClick={() => router.back()}>
        <ArrowBack />
      </Button>
      <h2 className='text-2xl font-bold leading-loose text-gray-900'>123</h2>
    </div>
  );
};

export { MobileTitle };
