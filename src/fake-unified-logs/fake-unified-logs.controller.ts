import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { FakeUnifiedLogsService } from './fake-unified-logs.service';
import { FakeLog, StatusResponse } from './interfaces/';
import { PostFakeDto } from './dto/PostFake.dto';
import { HeaderDTO } from './dto/Header.dto';
import { RequestHeaders } from './decorators/request-headers.decorator';

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
  @Header('x-timestamp', () => new Date().toISOString())
  @Header('x-correlation-id', () => Math.random().toString(36).substring(2))
  @HttpCode(201)
  start(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.start(headers, postFakeDto);
  }

  @Post('end')
  @HttpCode(200)
  end(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.start(headers, postFakeDto);
  }

  @Post('flow')
  @HttpCode(200)
  flow(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.start(headers, postFakeDto);
  }

  @Post('exception')
  @HttpCode(200)
  exception(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.start(headers, postFakeDto);
  }

  @Get('hello')
  getSHello(): string {
    return 'Hello from FakeUnifiedLogsController!';
  }
}
