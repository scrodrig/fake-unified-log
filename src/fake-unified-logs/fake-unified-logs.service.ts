import { Injectable } from '@nestjs/common';
import { FakeLog } from './interfaces/fake-log.interface';
import { StatusResponse } from './interfaces/status-reponse.interface';

@Injectable()
export class FakeUnifiedLogsService {
  private readonly logs: FakeLog[] = [];

  create(log: FakeLog): StatusResponse {
    this.logs.push(log);
    return {
      success: 'ok',
    };
  }

  findAll(): FakeLog[] {
    return this.logs;
  }
}
