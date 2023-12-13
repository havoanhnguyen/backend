import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @IsString()
  phone?: string;

  @IsDate()
  birthDay?: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;
}

export class UserSignInDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
