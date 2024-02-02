'use client';

import { Button, buttonVariants } from '@/ui';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ContinueButton = () => {
  const searchParams = useSearchParams();
  const { id, date } = useParams<{ id: string; date: string }>();
  const { push } = useRouter();

  // film/1/hall/Red/time/22%3A40/places  ?row1=2&column1=3&row2=4&column2=5

  return (
    <Button
      className={buttonVariants({ size: 'full' })}
      disabled={!searchParams.get('time') || !searchParams.get('hall')}
      onClick={() =>
        push(
          `/mobile/film/${id}/date/${date}/hall/${searchParams.get('hall')}/time/${searchParams.get('time')}/places`
        )
      }
    >
      Продолжить
    </Button>
  );
};

export { ContinueButton };
