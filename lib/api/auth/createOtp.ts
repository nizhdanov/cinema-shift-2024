import { api } from '../instance';

export const createOtp = (data: { phone: string }) => {
  return api.fetch(`/auth/otp`, { method: 'POST', body: JSON.stringify(data) });
};
