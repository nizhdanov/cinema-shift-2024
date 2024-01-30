import { MobileBottomNavigation } from '@/components/MobileBottomNavigation';
import { MobileTitle } from '@/components/MobileTitle';
import { cookies } from 'next/headers';

// export async function generateMetadata({ params }) {
//   return {
//     title: '...'
//   };
// }

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const viewport = cookies().get('viewport')?.value;

  return (
    <>
      {viewport === 'mobile' && <MobileTitle />}
      <div className='px-4'>{children}</div>
      {viewport === 'mobile' && <MobileBottomNavigation />}
    </>
  );
};

export default MobileLayout;
