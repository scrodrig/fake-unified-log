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
  getHello(): { message: string } {
    return { message: 'Greeting from fake log events' };
  }

  @Post('start')
  @HttpCode(201)
  start(
    @Req() request: Request,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.start(postFakeDto);
  }

  @Post('end')
  @HttpCode(200)
  end(
    @Req() request: Request,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.start(postFakeDto);
  }

  @Post('flow')
  @HttpCode(200)
  flow(
    @Req() request: Request,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.start(postFakeDto);
  }

  @Post('exception')
  @HttpCode(200)
  exception(
    @Req() request: Request,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    console.log(request.headers);
    return this.fakeUnifiedLogsService.start(postFakeDto);
  }
}
