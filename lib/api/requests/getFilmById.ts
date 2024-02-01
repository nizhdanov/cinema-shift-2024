import { api } from './instance';

export const getFilmById = (id: string) => api.fetch(`/cinema/film/${id}`);
