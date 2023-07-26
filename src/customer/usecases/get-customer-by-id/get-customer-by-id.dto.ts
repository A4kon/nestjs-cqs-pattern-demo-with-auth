import { IsUUID } from 'class-validator';

export class GetCustomerByIdDto {
  @IsUUID('4')
  id: string;
}
