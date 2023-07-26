import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GetCustomerByIdDto } from './get-customer-by-id.dto';

@Injectable()
export class GetCustomerByIdUsecase {
  constructor(private prisma: PrismaService) {}
  async search(params: GetCustomerByIdDto) {
    const { id } = params;
    return this.prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }
}
