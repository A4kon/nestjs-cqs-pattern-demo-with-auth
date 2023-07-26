import { IsEmail, IsEnum, IsUUID } from 'class-validator';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';

export class SignInDto {
  @IsUUID('4')
  id: string;
  @IsEmail()
  email: string;
  @IsEnum(RolesEnum)
  role: RolesEnum;
}
