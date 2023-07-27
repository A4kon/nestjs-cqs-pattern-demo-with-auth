import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ValidateUserCodeDto } from './validate-user-code.dto';

@Injectable()
export class ValidateUserCodeUsecase {
  constructor(private prisma: PrismaService) {}
  async execute(params: ValidateUserCodeDto) {
    const { email, code } = params;
    const exists = await this.prisma.customer.findUnique({
      where: {
        email,
      },
    });
    if (!exists) {
      throw new NotFoundException('User for that action does not exists');
    }
    if (exists.isVerified) {
      throw new BadRequestException('User already verified');
    }
    if (exists.tmpOtp === code) {
      await this.prisma.customer.update({
        where: { id: exists.id },
        data: {
          isVerified: true,
        },
      });
    }
  }
}
