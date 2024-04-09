import { Test, TestingModule } from '@nestjs/testing';
import { FakeUnifiedLogsService } from './fake-unified-logs.service';

describe('FakeUnifiedLogsService', () => {
  let service: FakeUnifiedLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeUnifiedLogsService],
    }).compile();

    service = module.get<FakeUnifiedLogsService>(FakeUnifiedLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
