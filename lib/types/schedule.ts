import { ScheduleSeance } from './schedule-seance';

export interface Schedule {
  date: string;
  seances: ScheduleSeance[];
}
