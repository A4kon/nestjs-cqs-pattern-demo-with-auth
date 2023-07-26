import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'customer model' })
export class AuthModel {
  @Field({ nullable: true })
  token: string;
}
