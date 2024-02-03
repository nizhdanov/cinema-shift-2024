import { User } from './user';

export interface SignInResponse {
  success: boolean;
  reason?: string;
  user: User;
  token: string;
}
