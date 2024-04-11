import { Expose } from 'class-transformer';
import { IsDateString, IsDefined, IsString } from 'class-validator';

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

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-user' })
  xUser: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-platform' })
  xPlatform: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'x-step' })
  xStep: string;

  @IsString()
  @IsDefined()
  @Expose({ name: 'Content-Type' || 'content-type' })
  contentType: string;
}
