import { HeaderDTO } from '../dto/Header.dto';
import { FakeLogDto, StatusResponse } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

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
    code: '500',
    type: 'MULE:EXPRESSION',
    timestamp: new Date().toISOString(),
    title: 'Error  - Expression failed',
    detail: 'An error occurred while evaluating a DataWeave expression',
    referenceId: uuidv4(),
  };
};
