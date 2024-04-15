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
import { v4 as uuidv4 } from 'uuid';

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
  @Header('x-correlation-id', () => uuidv4())
  @HttpCode(201)
  start(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.start(headers, postFakeDto);
  }

  @Post('end')
  @Header('x-timestamp', () => new Date().toISOString())
  @Header('x-correlation-id', () => uuidv4())
  @HttpCode(200)
  end(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.end(headers, postFakeDto);
  }

  @Post('flow')
  @Header('x-timestamp', () => new Date().toISOString())
  @Header('x-correlation-id', () => uuidv4())
  @HttpCode(200)
  flow(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.flow(headers, postFakeDto);
  }

  @Post('exception')
  @Header('x-timestamp', () => new Date().toISOString())
  @Header('x-correlation-id', () => uuidv4())
  @HttpCode(200)
  exception(
    @RequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeaderDTO,
    @Body(ValidationPipe) postFakeDto: PostFakeDto,
  ): StatusResponse {
    return this.fakeUnifiedLogsService.exception(headers, postFakeDto);
  }

  @Get('hello')
  getSHello(): string {
    return 'Hello from FakeUnifiedLogsController!';
  }
}
