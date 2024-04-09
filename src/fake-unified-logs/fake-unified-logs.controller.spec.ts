import { Test, TestingModule } from '@nestjs/testing';
import { FakeUnifiedLogsController } from './fake-unified-logs.controller';
import { FakeUnifiedLogsService } from './fake-unified-logs.service';

describe('FakeUnifiedLogsController', () => {
  let controller: FakeUnifiedLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakeUnifiedLogsController],
      providers: [FakeUnifiedLogsService],
    }).compile();

    controller = module.get<FakeUnifiedLogsController>(
      FakeUnifiedLogsController,
    );
  });

  describe('fake-unified-controllers', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
