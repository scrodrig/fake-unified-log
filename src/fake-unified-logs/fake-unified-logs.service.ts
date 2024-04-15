import { Injectable } from '@nestjs/common';
import { logs as fakeLogs } from './data/fake-logs';
import { FakeLogDto, StatusResponse, FakeLog } from './interfaces';
import { HeaderDTO } from './dto/Header.dto';
import { mockRequest } from './utils/mock-request';

@Injectable()
export class FakeUnifiedLogsService {
  private readonly logs: FakeLog[] = fakeLogs;

  start(headers: HeaderDTO, log: FakeLogDto): StatusResponse {
    return mockRequest({ headers, log });
  }

  end(headers: HeaderDTO, log: FakeLogDto): StatusResponse {
    return mockRequest({ headers, log });
  }

  flow(headers: HeaderDTO, log: FakeLogDto): StatusResponse {
    return mockRequest({ headers, log });
  }

  exception(headers: HeaderDTO, log: FakeLogDto): StatusResponse {
    return mockRequest({ headers, log });
  }

  findAll(): FakeLog[] {
    return this.logs;
  }
}
