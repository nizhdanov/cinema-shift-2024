'use client';

import { Button } from '@/ui';
import { cn } from '@/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface SelectTimeButtonProps {
  hallName: string;
  time: string;
}

const SelectTimeButton = ({ hallName, time }: SelectTimeButtonProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSelectTimeButton = (hall: string, time: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('hall', hall);
    params.set('time', time);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      variant={'outline'}
      size={'default'}
      onClick={() => handleSelectTimeButton(hallName, time)}
      className={cn(
        searchParams.get('time') === time &&
          searchParams.get('hall') === hallName &&
          ' bg-[#97A1AF] text-white'
      )}
    >
      {time}
    </Button>
  );
};

export { SelectTimeButton };
