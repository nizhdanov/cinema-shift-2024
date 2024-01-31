import { MobileBottomNavigation } from '@/components/MobileBottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className='px-4'>{children}</div>
      <MobileBottomNavigation />
    </>
  );
};

export default Layout;
