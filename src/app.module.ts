import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FakeUnifiedLogsController } from './fake-unified-logs/fake-unified-logs.controller';
import { FakeUnifiedLogsService } from './fake-unified-logs/fake-unified-logs.service';
import { FakeUnifiedLogsModule } from './fake-unified-logs/fake-unified-logs.module';

@Module({
  imports: [FakeUnifiedLogsModule],
  controllers: [AppController, FakeUnifiedLogsController],
  providers: [AppService, FakeUnifiedLogsService],
})
export class AppModule {}
