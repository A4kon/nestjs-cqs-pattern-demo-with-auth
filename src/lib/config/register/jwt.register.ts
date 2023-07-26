import { registerAs } from '@nestjs/config';
import { JwtConfigInterface } from './jwt.interface';

export default registerAs<JwtConfigInterface>('jwt', () => ({
  secret: process.env['JWT_SECRET'] as JwtConfigInterface['secret'],
}));
