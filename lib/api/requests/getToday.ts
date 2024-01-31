import { baseUrl } from '@/lib/consts';

export const getToday = async () => {
  const response = await fetch(`${baseUrl}/cinema/today`, { next: { revalidate: 3600 } });
  return response.json();
};
