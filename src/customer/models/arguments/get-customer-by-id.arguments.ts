import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class GetCustomerByIdArguments {
  @IsNotEmpty()
  @IsUUID('4')
  @Field({ nullable: false })
  id: string;
}
