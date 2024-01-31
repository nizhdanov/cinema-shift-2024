import { Hall } from './hall';
import { Ticket } from './ticket';

export interface ScheduleSeance {
  time: string;
  hall: Hall;
  payedTickets: Ticket[];
}
