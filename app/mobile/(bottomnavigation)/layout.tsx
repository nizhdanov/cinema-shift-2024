import { MobileBottomNavigation } from '@/components/MobileBottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <MobileBottomNavigation />
    </>
  );
};

export default Layout;
