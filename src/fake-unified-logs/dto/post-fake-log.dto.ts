import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { FakeLogDto } from '../interfaces';

export class PostFakeDto implements FakeLogDto {
  @IsString()
  @IsNotEmpty()
  hostname: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  ip: string;
}
