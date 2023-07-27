import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateCustomerDto } from './update-customer.dto';

@Injectable()
export class UpdateCustomerUsecase {
  constructor(private prisma: PrismaService) {}
  async execute(params: UpdateCustomerDto) {
    const { id, email } = params;
    return await this.prisma.customer.update({
      where: {
        id,
      },
      data: {
        email,
      },
    });
  }
}
