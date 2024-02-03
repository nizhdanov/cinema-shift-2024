'use client';

import { Button } from '@/ui';
import { useRouter } from 'next/navigation';

const GoToConfirmation = () => {
  const { push } = useRouter();

  const handleGoToConfirmation = () => {
    // push();
  };

  return (
    <Button fixed={true} onClick={() => handleGoToConfirmation()}>
      Продолжить
    </Button>
  );
};

export { GoToConfirmation };
