import { FilmCard } from '@/components/FilmCard';
import { getToday } from '@/requests';
import { FilmsResponse } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Афиша'
};

const Afisha = async () => {
  const afisha: FilmsResponse = await getToday();
  return (
    <main className='flex flex-col gap-4 py-4 sm:pt-12'>
      <h2 className='hidden pl-8 text-2xl font-bold leading-loose text-gray-900 sm:block'>Афиша</h2>
      <div className='flex w-full flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-3 sm:gap-8'>
        {afisha.films.map((film) => (
          <FilmCard key={film.id} href={`/${film.id}`} film={film}>
            Подробнее
          </FilmCard>
        ))}
      </div>
    </main>
  );
};

export default Afisha;
