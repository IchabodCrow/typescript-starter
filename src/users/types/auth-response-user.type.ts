import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class AuthResponseUser {
  @Field()
  id: string;

  @Field()
  email: string;
}
