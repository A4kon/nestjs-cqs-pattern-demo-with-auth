import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
