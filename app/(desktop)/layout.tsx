import { DesktopHeader } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DesktopHeader />
      {children}
    </>
  );
};

export default Layout;
