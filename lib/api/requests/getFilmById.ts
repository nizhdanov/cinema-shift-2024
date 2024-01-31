import { baseUrl } from '@/lib/consts';

export const getFilmById = async (id: string) => {
  const response = await fetch(`${baseUrl}/cinema/film/${id}`, { next: { revalidate: 3600 } });
  return response.json();
};
