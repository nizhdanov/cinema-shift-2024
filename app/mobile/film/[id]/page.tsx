import { FilmCard } from '@/components/FilmCard';
import { MobileHeader } from '@/components/MobileHeader';
import { CrossIcon } from '@/icons';
import { getByFilmIdSchedule, getFilmById } from '@/requests';
import { FilmResponse, ScheduleResponse } from '@/types';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  const { film }: FilmResponse = await getFilmById(id);

  return {
    title: `Афиша - ${film.name} `
  };
}

const FilmDescription = async ({ params: { id } }: { params: { id: string } }) => {
  const { film }: FilmResponse = await getFilmById(id);
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(id);

  return (
    <>
      <MobileHeader>
        <CrossIcon />
      </MobileHeader>
      <div className='px-4'>
        <FilmCard
          href={`/mobile/film/${id}/schedule/date/${schedules[0].date}`}
          film={film}
          isMore={true}
        >
          Посмотреть расписание
        </FilmCard>
      </div>
    </>
  );
};

export default FilmDescription;
