export interface StatusResponse {
  success?: 'Ok' | 'Error';
  code?: string;
  type?: string;
  timestamp?: string;
  title?: string;
  detail?: string;
  referenceId?: string;
}
