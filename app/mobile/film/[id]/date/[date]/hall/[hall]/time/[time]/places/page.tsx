import { Ticket } from '@/components/places/Ticket';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';

interface PlacesPageProps {
  params: { id: string; date: string; hall: string; time: string };
  searchParams: { count: string };
}
const PlacesPage = async ({ params, searchParams }: PlacesPageProps) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(params.id);

  const places = schedules
    .find((schedule) => schedule.date === params.date)!
    .seances.find(
      (seance) =>
        seance.time === decodeURIComponent(params.time) && seance.hall.name === params.hall
    )!.hall.places;

  return <main className='flex flex-col gap-10 px-4'>{<Ticket places={places} />}</main>;
};

export default PlacesPage;
