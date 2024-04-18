import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

export const RequestHeaders = createParamDecorator(
  async (property: string | number | symbol, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    if (
      typeof property === 'string' ||
      typeof property === 'number' ||
      typeof property === 'symbol'
    ) {
      return headers[property];
    }

    const dto = plainToClass(property, headers, {
      excludeExtraneousValues: true,
    });

    return dto;
  },
);
