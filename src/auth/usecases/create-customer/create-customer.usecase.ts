import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerDto } from './create-customer.dto';
import * as bcrypt from 'bcrypt';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';

@Injectable()
export class CreateCustomerUsecase {
  constructor(private prisma: PrismaService) {}
  async execute(params: CreateCustomerDto) {
    const { email, password } = params;

    const hash = await bcrypt.hash(password, 10);

    return this.prisma.customer.create({
      data: {
        email,
        password: hash,
        role: RolesEnum.CUSTOMER,
      },
    });
  }
}
