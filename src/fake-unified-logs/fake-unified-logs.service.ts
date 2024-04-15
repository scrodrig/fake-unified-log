import { Injectable } from '@nestjs/common';
import { logs as fakeLogs } from './data/fake-logs';
import { FakeLogDto, StatusResponse, FakeLog } from './interfaces';
import { HeaderDTO } from './dto/Header.dto';

@Injectable()
export class FakeUnifiedLogsService {
  private readonly logs: FakeLog[] = fakeLogs;

  start(headers: HeaderDTO, log: FakeLogDto): StatusResponse {
    const { forceError } = log;
    if (!forceError) {
      return {
        success: 'Ok',
      };
    }
    return {
      success: 'error',
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
