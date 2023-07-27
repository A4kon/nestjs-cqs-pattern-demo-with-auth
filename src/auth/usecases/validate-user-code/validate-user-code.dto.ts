import { IsEmail, IsNotEmpty, Length, IsNumber } from 'class-validator';

export class ValidateUserCodeDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(4, 4)
  code: number;
}
