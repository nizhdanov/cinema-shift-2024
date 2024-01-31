import { Seance } from './seance';

export interface Ticket {
  filmId: string;
  row: number;
  column: number;
  seance: Seance[];
  phone: string;
}
