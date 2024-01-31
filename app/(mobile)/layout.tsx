import { BtnAndTitleNav } from '@/components/BtnAndTitleNav';
import { DesktopHeader } from '@/components/DesktopHeader';
import { MobileBottomNavigation } from '@/components/MobileBottomNavigation';
import { ArrowBack } from '@/icons';
import { cookies } from 'next/headers';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const viewport = cookies().get('viewport')?.value;

  return (
    <>
      {viewport === 'mobile' ? (
        <BtnAndTitleNav title={'Билеты'}>
          <ArrowBack />
        </BtnAndTitleNav>
      ) : (
        <DesktopHeader />
      )}
      <div className='px-4 sm:px-0'>{children}</div>
      {viewport === 'mobile' && <MobileBottomNavigation />}
    </>
  );
};

export default Layout;
