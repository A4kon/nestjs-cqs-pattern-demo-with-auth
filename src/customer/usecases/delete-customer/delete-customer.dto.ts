import { IsUUID } from 'class-validator';

export class DeleteCustomerDto {
  @IsUUID('4')
  id: string;
}
