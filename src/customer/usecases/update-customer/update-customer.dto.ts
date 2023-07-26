import { IsEmail, IsUUID } from 'class-validator';

export class UpdateCustomerDto {
  @IsUUID('4')
  id: string;

  @IsEmail()
  email: string;
}
