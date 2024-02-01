import { Seance } from './seance';

export interface Ticket {
  filmId: string;
  row: number; // ряд
  column: number; // место
  seance: Seance[];
  phone: string;
}
