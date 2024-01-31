import { baseUrl } from '../baseUrl';

export const getByFilmIdSchedule = async (id: string) => {
  const response = await fetch(`${baseUrl}/cinema/film/${id}/schedule`, {
    next: { revalidate: 3600 }
  });
  return response.json();
};
