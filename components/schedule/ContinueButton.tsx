'use client';

import { Button, buttonVariants } from '@/ui';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ContinueButton = () => {
  const searchParams = useSearchParams();
  const { id, date } = useParams<{ id: string; date: string }>();
  const { push } = useRouter();

  return (
    <Button
      className={buttonVariants({ fixed: true })}
      disabled={!searchParams.get('time') || !searchParams.get('hall')}
      onClick={() =>
        push(
          `/mobile/film/${id}/date/${date}/hall/${searchParams.get('hall')}/time/${encodeURIComponent(searchParams.get('time')!)}/places?count=1`
        )
      }
    >
      Продолжить
    </Button>
  );
};

export { ContinueButton };
