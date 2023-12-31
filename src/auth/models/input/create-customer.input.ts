import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @IsEmail()
  @Field({ nullable: false })
  email: string;
  @IsStrongPassword()
  @Field({ nullable: false })
  password: string;
}
