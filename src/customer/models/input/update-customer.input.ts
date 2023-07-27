import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateCustomerInput {
  @IsNotEmpty()
  @IsUUID('4')
  @Field(() => String, { nullable: false })
  id: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { nullable: false })
  email: string;
}
