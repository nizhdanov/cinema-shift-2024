import { getByFilmIdSchedule } from '@/requests';
import { ScheduleResponse } from '@/types';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui';
import React from 'react';

const SchedulePage = async ({ params: { id } }: { params: { id: string } }) => {
  const { schedules }: ScheduleResponse = await getByFilmIdSchedule(id);
  const hallNames = Array.from(
    new Set(schedules.flatMap((schedule) => schedule.seances.map((seance) => seance.hall.name)))
  );
  const filteringByHallName = hallNames.map((hallName) => ({
    hall: hallName,
    schedules: schedules.map((schedule) => ({
      ...schedule,
      seances: schedule.seances.filter((seance) => seance.hall.name === hallName)
    }))
  }));

  const btnHandler = () => {};

  return (
    <main>
      <Tabs defaultValue={schedules[0].date} className='w-full'>
        <TabsList className='grid w-full grid-cols-7'>
          {schedules.map((schedule) => (
            <TabsTrigger key={schedule.date} value={schedule.date} className=''>
              {schedule.date}
            </TabsTrigger>
          ))}
        </TabsList>
        {schedules.map((schedule) => (
          <TabsContent key={schedule.date} value={schedule.date} className=''>
            {filteringByHallName.map(({ hall, schedules }) => (
              <div key={hall}>
                <p>{hall}</p>
                {schedules.map(({ seances, date }) => (
                  <>
                    {date === schedule.date &&
                      seances.map((seance) => (
                        <Button variant={'outline'} key={seance.time}>
                          {seance.time}
                        </Button>
                      ))}
                  </>
                ))}
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default SchedulePage;
