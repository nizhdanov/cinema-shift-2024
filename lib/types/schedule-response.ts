import { Schedule } from '.';

export interface ScheduleResponse {
  success: boolean;
  reason?: string;
  schedules: Schedule[];
}
