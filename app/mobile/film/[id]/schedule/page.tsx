import { TabBtn } from './_TabBtn';
import { MobileHeader } from '@/components/MobileHeader';
import { ArrowBackIcon } from '@/icons';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';
import { Button, ScrollArea, ScrollBar } from '@/ui';

interface SchedulePageProps {
  params: { id: string };
  searchParams: { date: string; time?: string; row?: string; column?: string };
}
const SchedulePage = async ({ params, searchParams }: SchedulePageProps) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(params.id);
  const hallNames = Array.from(
    new Set(schedules.flatMap((schedule) => schedule.seances.map((seance) => seance.hall.name)))
  );

  //  https://example.com/film/1/schedule?date=01.01.2024&time=10:00&row=1&column=2
  return (
    <>
      <MobileHeader title={'Расписание'}>
        <ArrowBackIcon />
      </MobileHeader>
      <main className='flex flex-col gap-6 px-4'>
        <ScrollArea>
          <div className='inline-flex h-11 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'>
            {schedules.map(({ date }) => (
              <TabBtn key={date} date={date} />
            ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <div className='flex flex-col gap-6 '>
          {hallNames.map((hallName) => (
            <div key={hallName} className='flex flex-col gap-4'>
              <p className=' text-xs font-normal leading-none text-gray-700'>{hallName}</p>
              <div key={hallName} className='flex flex-wrap gap-2'>
                {schedules.map(({ seances, date }) => (
                  <>
                    {seances.map(({ hall, time }) => (
                      <>
                        {hallName === hall.name && searchParams.date === date && (
                          <Button variant={'outline'} size={'default'}>
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
      </main>
    </>
  );
};
