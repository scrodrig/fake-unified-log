import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { FakeLog } from '../interfaces/fake-log.interface';

export class PostFakeDto implements FakeLog {
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
