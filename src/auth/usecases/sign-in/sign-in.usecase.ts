import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './sign-in.dto';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class SignIncase {
  constructor(private jwtService: JwtService, private eventBus: EventBus) {}
  async execute(user: SignInDto) {
    const payload = { user: user };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
      id: user.id,
    };
  }
}
