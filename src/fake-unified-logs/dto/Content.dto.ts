import {
  IsDefined,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ContextDTO } from './Context.dto';
import { Type } from 'class-transformer';
export class ContentDTO {
  @IsString()
  @IsDefined()
  inputPayload: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  payload: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => ContextDTO)
  context: ContextDTO;
}
