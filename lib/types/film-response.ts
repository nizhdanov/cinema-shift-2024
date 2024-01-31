import { Film } from './film';

export interface FilmResponse {
  success: boolean;
  reason?: string;
  film: Film;
}
