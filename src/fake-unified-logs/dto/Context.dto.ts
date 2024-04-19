import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ContextDTO {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  elapsed: number;

  @IsEnum(['0', '1'])
  isError: '0' | '1';

  @IsString()
  @IsOptional()
  eCode: string;

  @IsString()
  @IsOptional()
  eDescription: string;

  @IsString()
  @IsOptional()
  nCode: string;

  @IsString()
  @IsOptional()
  nDescription: string;

  @IsDefined()
  businessKeyGroups: '' | [object];
}
