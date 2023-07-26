import { registerEnumType, ObjectType, Field } from '@nestjs/graphql';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';
import { BaseModel } from 'src/lib/helpers/models/base.model';

registerEnumType(RolesEnum, {
  name: 'RolesEnum',
});

@ObjectType({ description: 'customer model' })
export class CustomerModel extends BaseModel {
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  status: boolean;
  @Field(() => RolesEnum, { nullable: false })
  role: RolesEnum;
}
