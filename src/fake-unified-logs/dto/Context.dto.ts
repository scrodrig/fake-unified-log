import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator';

export class ContextDTO {
  @IsNumberString()
  @IsDefined()
  @IsNotEmpty()
  elpased: number;

  @IsEnum(['0', '1'])
  isError: '0' | '1';

  @IsString()
  eCode: string;

  @IsString()
  eDescription: string;

  @IsString()
  nCode: string;

  @IsString()
  nDescription: string;

  @IsDefined()
  businessKeyGroups: '' | [object];
}
