import { FilmCard } from '@/components/FilmCard';
import { getFilmById } from '@/requests';
import { FilmResponse } from '@/types';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  const { film }: FilmResponse = await getFilmById(id);

  return {
    title: `Афиша - ${film.name} `
  };
}

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  const { film }: FilmResponse = await getFilmById(id);

  return (
    <FilmCard href={`/mobile/schedule/${id}`} film={film} isMore={true}>
      Посмотреть расписание
    </FilmCard>
  );
};

export default Movie;
