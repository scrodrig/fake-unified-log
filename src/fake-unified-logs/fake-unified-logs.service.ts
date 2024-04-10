import { Injectable } from '@nestjs/common';
import { logs as fakeLogs } from './data/fake-logs';
import { FakeLogDto, StatusResponse, FakeLog } from './interfaces';

@Injectable()
export class FakeUnifiedLogsService {
  private readonly logs: FakeLog[] = fakeLogs;

  start(log: FakeLogDto): StatusResponse {
    // this.logs.push(log);
    console.log(log);
    return {
      success: 'Ok',
    };
  }

  end(log: FakeLogDto): StatusResponse {
    // this.logs.push(log);
    console.log(log);
    return {
      success: 'Ok',
    };
  }

  flow(log: FakeLogDto): StatusResponse {
    // this.logs.push(log);
    console.log(log);
    return {
      success: 'Ok',
    };
  }

  exception(log: FakeLogDto): StatusResponse {
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
