import { ArgsType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';
import { PaginationInput } from 'src/lib/helpers/models/input/pagination.input';

@ArgsType()
export class ListCustomersFieldsArguments {
  @IsOptional()
  @IsUUID('4')
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;
}

@ArgsType()
export class ListCustomersArguments extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.CustomerWhereUniqueInput;
  @Field(() => ListCustomersFieldsArguments, { nullable: true })
  where: ListCustomersFieldsArguments;
}
