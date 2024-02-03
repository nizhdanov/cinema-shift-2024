import { MobileHeader } from '@/components/MobileHeader';
import { ArrowBackIcon } from '@/icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Билеты'
};

const Tickets = () => {
  return (
    <>
      <MobileHeader title={'Билеты'}>
        <ArrowBackIcon />
      </MobileHeader>
      <main>Tickets</main>;
    </>
  );
};

export default Tickets;
