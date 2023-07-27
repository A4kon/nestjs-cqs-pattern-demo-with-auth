import { Prisma } from '@prisma/client';
import { RolesEnum } from '../..//src/lib/helpers/enums/roles.enum';

export const customers: Prisma.CustomerUpsertArgs['create'][] = [
  {
    id: '9e391faf-64b2-4d4c-b879-463532920fd3',
    email: 'user@gmail.com',
    password: '$2a$10$GdEp8vJpQx1m4AECIgIMQut9hZ9ILSSKmvNu.qpXFllVySFOjcy8.',
    role: RolesEnum.CUSTOMER,
    tmpOtp: 1234,
  },
  {
    id: '9e391faf-64b2-4d4c-b879-463532920fd4',
    email: 'user2@gmail.com',
    password: '$2a$10$GdEp8vJpQx1m4AECIgIMQut9hZ9ILSSKmvNu.qpXFllVySFOjcy8.',
    role: RolesEnum.ADMIN,
    tmpOtp: 1234,
  },
];
