import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DeleteCustomerDto } from './delete-customer.dto';

@Injectable()
export class DeleteCustomerUsecase {
  constructor(private prisma: PrismaService) {}
  async execute(params: DeleteCustomerDto) {
    const { id } = params;
    return this.prisma.customer.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
