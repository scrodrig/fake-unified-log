import { Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

export class HeaderDTO {
  @IsString()
  @IsDefined()
  @Expose({ name: 'myheader1' }) // required as headers are case insensitive
  myHeader1: string;

  // @IsString()
  // @IsDefined()
  // @Expose({ name: 'myheader2' })
  // myHeader2: string;
}
