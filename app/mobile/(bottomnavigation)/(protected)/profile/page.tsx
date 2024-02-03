import { MobileHeader } from '@/components/MobileHeader';
import { ArrowBackIcon } from '@/icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Профиль'
};

const Profile = () => {
  return (
    <>
      <MobileHeader title={'Профиль'}>
        <ArrowBackIcon />
      </MobileHeader>
      <main>Profile</main>;
    </>
  );
};

export default Profile;
