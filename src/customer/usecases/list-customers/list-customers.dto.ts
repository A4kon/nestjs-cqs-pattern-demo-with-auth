import { IsOptional, IsUUID, IsEmail } from 'class-validator';
import { PaginationDto } from 'src/lib/helpers/dto/pagination.dto';
import { Prisma } from '@prisma/client';

export class ListCustomersFieldsDto {
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}

export class ListCustomersDto extends PaginationDto {
  where: ListCustomersFieldsDto;
  cursor?: Prisma.CustomerWhereUniqueInput;
}
