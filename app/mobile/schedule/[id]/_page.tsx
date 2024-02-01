import { MobileHeader } from '@/components/MobileHeader';
import { ArrowBackIcon } from '@/icons';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';
import {
  Button,
  ScrollArea,
  ScrollBar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  buttonVariants
} from '@/ui';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Link from 'next/link';

dayjs.locale('ru');
dayjs.extend(customParseFormat);

const SchedulePage = async ({ params: { id } }: { params: { id: string } }) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(id);
  const hallNames = Array.from(
    new Set(schedules.flatMap((schedule) => schedule.seances.map((seance) => seance.hall.name)))
  );
  const filteringByHallName = hallNames.map((hallName) => ({
    hall: hallName,
    schedules: schedules.map((schedule) => ({
      ...schedule,
      seances: schedule.seances.filter((seance) => seance.hall.name === hallName)
    }))
  }));

  const btnHandler = () => {};

  return (
    <>
      <MobileHeader title={'Расписание'}>
        <ArrowBackIcon />
      </MobileHeader>
      <main className='px-4'>
        <Tabs defaultValue={schedules[0].date}>
          <ScrollArea>
            <TabsList className='grid w-[700px] grid-cols-7 '>
              {schedules.map((schedule) => (
                <TabsTrigger key={schedule.date} value={schedule.date}>
                  {dayjs(schedule.date, 'DD.MM.YY', 'ru').format('ddd, D MMM')}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>

          {schedules.map((schedule) => (
            <TabsContent key={schedule.date} value={schedule.date} className='flex flex-col gap-6'>
              {filteringByHallName.map(({ hall, schedules }) => (
                <div key={hall}>
                  <p className='mb-4 text-xs font-normal leading-none text-gray-700'>{hall}</p>
                  {schedules.map(({ seances, date }) => (
                    <div key={date} className='flex flex-wrap gap-2'>
                      {date === schedule.date &&
                        seances.map((seance) => (
                          <Button variant={'outline'} size={'default'} key={seance.time}>
                            {seance.time}
                          </Button>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
        <Link href={'#'} className={buttonVariants({ size: 'full' })}>
          Продолжить
        </Link>
      </main>
    </>
  );
};

export default SchedulePage;
