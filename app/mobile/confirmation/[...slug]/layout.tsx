import { MobileHeader } from '@/components/MobileHeader';
import { GoToConfirmation } from '@/components/places/GoToConfirmation';
import { ArrowBackIcon } from '@/icons';

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string; date: string; hall: string; time: string };
}

const Layout = async ({ children }: LayoutProps) => {
  return (
    <>
      <MobileHeader title={'Выбор места'}>
        <ArrowBackIcon />
      </MobileHeader>

      {children}
      <GoToConfirmation />
    </>
  );
};

export default Layout;
