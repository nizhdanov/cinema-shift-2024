import { SelectTimeButton } from '@/components/schedule/SelectTimeButton';
import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';

interface SchedulePageProps {
  params: { id: string; date: string };
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(params.id);

  const seances = schedules.find((schedule) => schedule.date === params.date)!.seances;
  const hallNames = seances
    .map((seance) => seance.hall.name)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
    <main className='mt-6 flex flex-col gap-6 px-4'>
      {hallNames.map((hallName) => (
        <div key={hallName} className='flex flex-col gap-4'>
          <p className=' text-xs font-normal leading-none text-gray-700'>{hallName} зал</p>
          <div className='flex flex-wrap gap-2'>
            {seances.map(({ hall, time }, index) => (
              <>
                {hallName === hall.name && (
                  <SelectTimeButton key={index} hallName={hall.name} time={time} />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default SchedulePage;
