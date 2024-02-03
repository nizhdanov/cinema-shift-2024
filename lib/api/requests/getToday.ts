import { api } from '../instance';

export const getToday = () => api.fetch(`/cinema/today`, {}, true);
