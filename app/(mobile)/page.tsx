import { MovieCard } from '@/components/MovieCard';
import { getToday } from '@/requests';
import { FilmsResponse } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Афиша'
};

const Posters = async () => {
  const cinema: FilmsResponse = await getToday();
  return (
    <main className='flex flex-col gap-4 py-4 sm:pt-12'>
      <h2 className='hidden pl-8 text-2xl font-bold leading-loose text-gray-900 sm:block'>Афиша</h2>
      <div className='flex w-full flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-3 sm:gap-8'>
        {cinema.films.map(({ name, genres, country, id, img, originalName, userRatings }) => (
          <MovieCard
            href={`/${id}`}
            key={id}
            name={name}
            subtitle={originalName}
            userRatings={userRatings}
            genres={genres}
            country={country}
            img={img}
            btnTitle='Подробнее'
          />
        ))}
      </div>
    </main>
  );
};

export default Posters;
