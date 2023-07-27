import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ListCustomersDto } from './list-customers.dto';

@Injectable()
export class ListCustomersUsecase {
  constructor(private prisma: PrismaService) {}
  async search(params: ListCustomersDto) {
    const { skip, take, cursor, where } = params;

    return this.prisma.customer.findMany({
      skip,
      take,
      cursor,
      where: {
        ...where,
        status: true,
      },
    });
  }
}
