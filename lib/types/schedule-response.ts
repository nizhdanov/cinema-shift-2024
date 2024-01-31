import { Schedule } from './schedule';

export interface ScheduleResponse {
  success: boolean;
  reason?: string;
  schedules: Schedule[];
}
