import { api } from '../instance';

export const getByFilmIdSchedule = (id: string) => api.fetch(`/cinema/film/${id}/schedule`);
