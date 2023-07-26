import { Prisma } from '@prisma/client';

export class ListCustomersQuery {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly skip: number,
    public readonly take: number,
    public readonly where: {
      email: string;
      id: string;
    },
    public readonly cursor?: Prisma.CustomerWhereUniqueInput,
  ) {}
}
