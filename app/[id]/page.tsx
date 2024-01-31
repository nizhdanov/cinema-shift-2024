import { MovieCard } from '@/components/MovieCard';
import { getFilmById } from '@/requests';
import { FilmResponse } from '@/types';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  const { film }: FilmResponse = await getFilmById(id);

  return {
    title: `Афиша - ${film.name} `
  };
}

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  const { film }: FilmResponse = await getFilmById(id);

  const viewport = cookies().get('viewport')?.value;

  if (viewport === 'mobile')
    return (
      <MovieCard
        key={film.id}
        name={film.name}
        subtitle={film.originalName}
        userRatings={film.userRatings}
        genres={film.genres}
        country={film.country}
        img={film.img}
        description={film.description}
        href={`/schedule/${id}`}
        btnTitle='Посмотреть расписание'
      />
    );

  return (
    <main className='flex w-full flex-col items-center justify-center'>
      Подробное описание фильма на десктопе
    </main>
  );
};

export default Movie;
