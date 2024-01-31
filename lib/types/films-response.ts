import { Film } from './film';

export interface FilmsResponse {
  success: boolean;
  reason?: string;
  films: Film[];
}
