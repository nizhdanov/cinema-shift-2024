import { MobileHeader } from '@/components/MobileHeader';
import { CrossIcon } from '@/icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Template = ({ children }: LayoutProps) => {
  return (
    <>
      <MobileHeader>
        <CrossIcon />
      </MobileHeader>
      <div className='px-4'>{children}</div>
    </>
  );
};

export default Template;
