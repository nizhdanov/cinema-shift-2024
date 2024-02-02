'use client';

import { Schedule } from '@/types';
import { Button, ScrollArea, ScrollBar } from '@/ui';
import { cn } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

dayjs.locale('ru');
dayjs.extend(customParseFormat);

interface DateAndTimePageProps {
  schedules: Schedule[];
}

const DateAndTimePage = ({ schedules }: DateAndTimePageProps) => {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();
  const params = useParams<{ id: string }>();

  const hallNames = Array.from(
    new Set(schedules.flatMap((schedule) => schedule.seances.map((seance) => seance.hall.name)))
  );

  const handleTabButton = (date: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('date', date);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSelectTimeButton = (hall: string, time: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('hall', hall);
    params.set('time', time);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleContinueButton = () => {
    const params = new URLSearchParams(searchParams);
    params.set('row', 'null');
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className='flex flex-col gap-6 px-4'>
      <ScrollArea>
        <div className='inline-flex h-11 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'>
          {schedules.map(({ date }) => (
            <button
              key={date}
              onClick={() => handleTabButton(date)}
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap  rounded-sm  px-4 py-[10px] text-sm font-normal leading-tight  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
                searchParams.get('date') === date && 'bg-background text-foreground shadow-sm'
              )}
            >
              {dayjs(date, 'DD.MM.YY', 'ru').format('dd, D MMM')}
            </button>
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
      <div className='flex flex-col gap-6 '>
        {hallNames.map((hallName) => (
          <div key={hallName} className='flex flex-col gap-4'>
            <p className=' text-xs font-normal leading-none text-gray-700'>{hallName} зал</p>
            <div className='flex flex-wrap gap-2'>
              {schedules.map(({ seances, date }) => (
                <>
                  {seances.map(({ hall, time }, index) => (
                    <>
                      {hallName === hall.name && searchParams.get('date') === date && (
                        <Button
                          key={index}
                          variant={'outline'}
                          size={'default'}
                          onClick={() => handleSelectTimeButton(hall.name, time)}
                          className={cn(
                            searchParams.get('time') === time &&
                              searchParams.get('hall') === hall.name &&
                              ' bg-[#97A1AF] text-white'
                          )}
                        >
                          {time}
                        </Button>
                      )}
                    </>
                  ))}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        size='full'
        disabled={!searchParams.get('time') || !searchParams.get('hall')}
        onClick={() => handleContinueButton()}
      >
        Продолжить
      </Button>
    </main>
  );
};

export { DateAndTimePage };
