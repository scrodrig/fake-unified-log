import {
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { FakeLogDto } from '../interfaces';
import { ContentDTO } from './Content.dto';
import { Type } from 'class-transformer';

export class PostFakeDto implements FakeLogDto {
  @IsEnum(['Process', 'Service', 'Interface'])
  @IsDefined()
  applicationType: 'Process' | 'Service' | 'Interface';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  domain: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => ContentDTO)
  content: ContentDTO;

  @IsEnum(['GET', 'POST', 'PUT'])
  @IsDefined()
  requestMethod: 'GET' | 'POST' | 'PUT';

  @IsString()
  @IsDefined()
  rawRequestUri: string;

  @IsBoolean()
  @IsOptional()
  forceError: boolean;
}
