import { MobileHeader } from '@/components/MobileHeader';
import { ArrowBackIcon } from '@/icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Template = ({ children }: LayoutProps) => {
  return (
    <>
      <MobileHeader title={'Расписание'}>
        <ArrowBackIcon />
      </MobileHeader>
      {children}
    </>
  );
};

export default Template;
