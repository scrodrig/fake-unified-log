import { Expose } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class HeaderDTO {
  @IsString()
  @IsDefined()
  @Expose({ name: 'client_id' }) // required as headers are case insensitive
  clientId: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'client_secret' })
  clientSecret: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-correlation-id' })
  xCorrelationId: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-api-name' })
  xApiName: string;

  @IsDateString()
  @IsDefined()
  @Expose({ name: 'x-timestamp' })
  xTimeStamp: string;

  @IsEmail()
  @IsDefined()
  @IsOptional()
  @Expose({ name: 'x-user' })
  xUser: string;

  @IsEnum(['SAP', 'TIBCO', 'CENTRIC', 'CPI'])
  @IsDefined()
  @Expose({ name: 'x-platform' })
  xPlatform: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-step' })
  xStep: string;

  // @IsString()
  // @IsDefined()
  // @Expose({ name: 'Content-Type' })
  // contentType: string;
}
