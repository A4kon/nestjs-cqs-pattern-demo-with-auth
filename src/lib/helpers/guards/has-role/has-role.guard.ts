import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesEnum } from '../../enums/roles.enum';

@Injectable()
export class HasRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RolesEnum[]>(
      'role',
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    try {
      const token = JSON.parse(
        Buffer.from(
          request.headers.authorization.replace('Bearer ', '').split('.')[1],
          'base64',
        ).toString(),
      );
      return requiredRoles.some((role) => token.user.role?.includes(role));
    } catch (e) {
      return false;
    }
  }
}
