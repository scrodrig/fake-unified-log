import { Expose } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class HeaderDTO {
  @IsString()
  @IsDefined()
  @Expose({ name: 'client_id' })
  'client_id': string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'client_secret' })
  'client_secret': string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-correlation-id' })
  'x-correlation-id': string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-api-name' })
  'x-api-name': string;

  @IsDateString()
  @IsDefined()
  @Expose({ name: 'x-timestamp' })
  'x-timestamp': string;

  @IsEmail()
  @IsDefined()
  @IsOptional()
  @Expose({ name: 'x-user' })
  'x-user': string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-platform' })
  'x-platform': string;

  @IsNumberString()
  @IsDefined()
  @Expose({ name: 'x-step' })
  'x-step': number;
}
