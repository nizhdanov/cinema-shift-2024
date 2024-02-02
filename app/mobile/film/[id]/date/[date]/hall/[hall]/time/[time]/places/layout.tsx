import { MobileHeader } from '@/components/MobileHeader';
import { TabButton } from '@/components/schedule/TabButton';
import { ArrowBackIcon } from '@/icons';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';
import { ScrollArea, ScrollBar } from '@/ui';

interface LayoutProps {
  children: React.ReactNode;
}

// film/1/schedule/date/01.02.2024    ?hall=Red&time=22%3A40 =>
// film/1/hall/Red/time/22%3A40/places  ?row1=2&column1=3&row2=4&column2=5
const Layout = async ({ children }: LayoutProps) => {
  return (
    <>
      <MobileHeader title={'Выбор места'}>
        <ArrowBackIcon />
      </MobileHeader>

      {children}
    </>
  );
};

export default Layout;
