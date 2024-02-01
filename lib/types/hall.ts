import { FilmHallCell } from './film-hall-cell';

export interface Hall {
  name: string;
  places: [FilmHallCell[]];
}
