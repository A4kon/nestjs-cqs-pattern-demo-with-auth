import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, Length } from 'class-validator';

@InputType()
export class ValidateUserCodeInput {
  @IsEmail()
  @Field({ nullable: false })
  email: string;
  @IsNotEmpty()
  @IsNumber()
  @Length(4, 4)
  @Field({ nullable: false })
  code: number;
}
