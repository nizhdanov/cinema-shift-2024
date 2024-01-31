import { BtnAndTitleNav } from '@/components/BtnAndTitleNav';
import { ArrowBack, Cross } from '@/icons';
import { cookies } from 'next/headers';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const viewport = cookies().get('viewport')?.value;

  return (
    <>
      {viewport === 'mobile' ? (
        <BtnAndTitleNav title='Расписание'>
          <ArrowBack />
        </BtnAndTitleNav>
      ) : (
        <></>
      )}
      <div className='px-4 sm:px-0'>{children}</div>
    </>
  );
};

export default Layout;
