import { Module } from '@nestjs/common';
import { FakeUnifiedLogsController } from './fake-unified-logs.controller';
import { FakeUnifiedLogsService } from './fake-unified-logs.service';

@Module({
  controllers: [FakeUnifiedLogsController],
  providers: [FakeUnifiedLogsService],
})
export class FakeUnifiedLogsModule {}
