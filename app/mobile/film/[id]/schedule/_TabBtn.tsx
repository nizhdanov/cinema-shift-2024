'use client';

import { cn } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

dayjs.locale('ru');
dayjs.extend(customParseFormat);

export const TabBtn = ({ date }: { date: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const btnHandler = () => {
    const params = new URLSearchParams(searchParams);
    params.set('date', date);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={() => btnHandler()}
      className={cn(
        'inline-flex items-center justify-center  whitespace-nowrap rounded-sm px-4 py-[10px] text-sm font-normal leading-tight  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
        searchParams.get('date') === date && 'bg-background text-foreground shadow-sm'
      )}
    >
      {dayjs(date, 'DD.MM.YY', 'ru').format('ddd, D MMM')}
    </button>
  );
};
