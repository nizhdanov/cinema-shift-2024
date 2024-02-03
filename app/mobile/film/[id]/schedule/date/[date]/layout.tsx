import { MobileHeader } from '@/components/MobileHeader';
import { ContinueButton } from '@/components/schedule/ContinueButton';
import { TabButton } from '@/components/schedule/TabButton';
import { ArrowBackIcon } from '@/icons';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';
import { ScrollArea, ScrollBar } from '@/ui';

interface TabNavigationProps {
  params: { id: string; date: string };
  children: React.ReactNode;
}

// film/1/schedule/date/01.02.2024    ?hall=Red&time=22%3A40 =>
// film/1/hall/Red/time/22%3A40/places  ?row1=2&column1=3&row2=4&column2=5
const TabNavigation = async ({ params, children }: TabNavigationProps) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(params.id);

  return (
    <>
      <MobileHeader title={'Расписание'}>
        <ArrowBackIcon />
      </MobileHeader>
      <nav className='flex flex-col gap-6 px-4'>
        <ScrollArea>
          <div className='inline-flex h-11 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'>
            {schedules.map(({ date }) => (
              <>
                <TabButton date={date} href={`/mobile/film/${params.id}/schedule/date/${date}`} />
              </>
            ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </nav>
      {children}
      <ContinueButton />
    </>
  );
};

export default TabNavigation;
