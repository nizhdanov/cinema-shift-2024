export interface OtpResponse {
  success: boolean;
  reason?: string;
  retryDelay: number;
}
