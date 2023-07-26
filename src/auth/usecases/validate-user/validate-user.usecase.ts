import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { ValidateUserDto } from './validate-user.dto';

@Injectable()
export class ValidateUserUsecase {
  constructor(private prisma: PrismaService) {}
  async execute(params: ValidateUserDto) {
    const { email } = params;
    const user = await this.prisma.customer.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }
    const match = await bcrypt.compare(params.password, user.password);
    if (!match) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...response } = user;
    return response;
  }
}
