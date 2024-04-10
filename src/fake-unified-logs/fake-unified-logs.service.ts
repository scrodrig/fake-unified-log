import { Injectable } from '@nestjs/common';
import { logs as fakeLogs } from './data/fake-logs';
import { FakeLogDto, StatusResponse, FakeLog } from './interfaces';

@Injectable()
export class FakeUnifiedLogsService {
  private readonly logs: FakeLog[] = fakeLogs;

  create(log: FakeLogDto): StatusResponse {
    // this.logs.push(log);
    console.log(log);
    return {
      success: 'Ok',
    };
  }

  findAll(): FakeLog[] {
    return this.logs;
  }
}
