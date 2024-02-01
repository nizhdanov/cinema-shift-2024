export const api = {
  baseUrl: 'https://shift-backend.onrender.com',
  fetch: async function (path: string | URL | Request, options?: RequestInit, revalidate = false) {
    if (revalidate) {
      options = { ...options, next: { revalidate: 3600 } };
    }
    const response = await fetch(`${this.baseUrl}${path}`, options);
    return response.json();
  }
};
