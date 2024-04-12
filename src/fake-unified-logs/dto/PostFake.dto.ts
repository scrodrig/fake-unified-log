import { IsDefined, IsEnum } from 'class-validator';
import { FakeLogDto } from '../interfaces';

export class PostFakeDto implements FakeLogDto {
  @IsEnum(['SAP', 'TIBCO', 'CENTRIC', 'CPI'])
  @IsDefined()
  applicationType: 'Processes' | 'Services' | 'Interfaces';
  domain: string;
  content: {
    inputPayload: string;
    payload: string;
    context: {
      elpased: number;
      isError: '0' | '1';
      eCode: string;
      eDescription: string;
      nCode: string;
      nDescription: string;
      businessKeyGroups: '' | [object];
    };
  };
  requestMethod: 'GET' | 'POST' | 'PUT';
  rawRequestUri: string;
}
