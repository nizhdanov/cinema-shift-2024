'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className=''>
      <h2 className='text-2xl font-bold leading-loose text-gray-900'>Что-то пошло не так!</h2>
      <button onClick={() => reset()}>Попробовать снова</button>
    </main>
  );
}
