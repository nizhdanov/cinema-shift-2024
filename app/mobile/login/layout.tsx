import { MobileHeader } from '@/components/MobileHeader';
import { GoToConfirmation } from '@/components/places/GoToConfirmation';
import { CrossIcon } from '@/icons';

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string; date: string; hall: string; time: string };
}

const LoginLayout = async ({ children }: LayoutProps) => {
  return (
    <>
      <MobileHeader title={'Авторизация'}>
        <CrossIcon />
      </MobileHeader>

      {children}
    </>
  );
};

export default LoginLayout;
