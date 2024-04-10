import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { FakeUnifiedLogsService } from './fake-unified-logs.service';
import { FakeLog, StatusResponse } from './interfaces/';
import { PostFakeDto } from './dto/post-fake-log.dto';

@Controller('fake-unified-logs/registry')
export class FakeUnifiedLogsController {
  constructor(
    private readonly fakeUnifiedLogsService: FakeUnifiedLogsService,
  ) {}

  @Get()
  findAll(@Req() request: Request): FakeLog[] {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.findAll();
  }

  @Get('greeting')
  getHello(): string {
    return 'Greeting from fake log events';
  }

  @Post('start')
  @HttpCode(200)
  start(
    @Req() request: Request,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.start(postFakeDto);
  }
}
