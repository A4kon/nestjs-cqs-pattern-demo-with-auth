import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesEnum } from '../../enums/roles.enum';
import { UnauthorizedCommandEvent } from 'src/auth/cqs/events/unauthorized-command/unauthorized-command.event';
import { EventBus } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class HasRoleGuard implements CanActivate {
  constructor(private reflector: Reflector, private eventBus: EventBus) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RolesEnum[]>(
      'role',
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req;
    try {
      const token = JSON.parse(
        Buffer.from(
          request.headers.authorization.replace('Bearer ', '').split('.')[1],
          'base64',
        ).toString(),
      );
      const exists = requiredRoles.some((role) =>
        token.user.role?.includes(role),
      );
      if (!exists) {
        throw new UnauthorizedException();
      }
      return true;
    } catch (e) {
      const event = new UnauthorizedCommandEvent(randomUUID());
      this.eventBus.publish(event);
      return false;
    }
  }
}
