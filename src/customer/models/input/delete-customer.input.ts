import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class DeleteCustomerInput {
  @IsNotEmpty()
  @IsUUID('4')
  @Field(() => String, { nullable: false })
  id: string;
}
