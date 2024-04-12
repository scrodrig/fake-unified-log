import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { FakeLogDto } from '../interfaces';
import { ContentDTO } from './Content.dto';
import { Type } from 'class-transformer';

export class PostFakeDto implements FakeLogDto {
  @IsEnum(['Processes', 'Services', 'Interfaces'])
  @IsDefined()
  applicationType: 'Processes' | 'Services' | 'Interfaces';

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
}
