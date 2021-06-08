import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class SignInRequest {
  @Field()
  email: string;

  @Field()
  password: string;
}
