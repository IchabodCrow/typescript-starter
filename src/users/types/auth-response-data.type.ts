import { Field, ObjectType } from '@nestjs/graphql';
import AuthResponseUser from './auth-response-user.type';

@ObjectType()
export default class AuthResponseData {
  @Field({ nullable: true })
  token?: string;

  @Field(() => AuthResponseUser)
  user: AuthResponseUser;
}
