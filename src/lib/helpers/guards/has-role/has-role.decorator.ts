import { SetMetadata } from '@nestjs/common';
import { RolesEnum } from '../../enums/roles.enum';

export const HasRole = (...roles: RolesEnum[]) => SetMetadata('role', roles);
