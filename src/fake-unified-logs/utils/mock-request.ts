import { HeaderDTO } from '../dto/Header.dto';
import { FakeLogDto, StatusResponse } from '../interfaces';

export interface MockRequest {
  headers: HeaderDTO;
  log: FakeLogDto;
}

export const mockRequest = ({ headers, log }: MockRequest): StatusResponse => {
  const { forceError } = log;
  if (!forceError) {
    return {
      success: 'Ok',
    };
  }
  return {
    success: 'error',
  };
};
