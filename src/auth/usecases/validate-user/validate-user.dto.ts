import { IsEmail, IsStrongPassword } from 'class-validator';

export class ValidateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
