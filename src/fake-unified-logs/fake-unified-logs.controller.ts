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

@Controller('fake-unified-logs')
export class FakeUnifiedLogsController {
  constructor(
    private readonly fakeUnifiedLogsService: FakeUnifiedLogsService,
  ) {}

  @Get()
  findAll(@Req() request: Request): FakeLog[] {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.findAll();
  }

  @Post()
  @HttpCode(200)
  create(@Body(ValidationPipe) postFakeDto: PostFakeDto): StatusResponse {
    return this.fakeUnifiedLogsService.create(postFakeDto);
  }
}
