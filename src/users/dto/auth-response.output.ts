import { Field, ObjectType } from '@nestjs/graphql';
import ErrorData from 'src/shared/types/error-data.type';

import AuthResponseData from '../types/auth-response-data.type';

@ObjectType()
export default class AuthResponse {
  @Field(() => AuthResponseData, { nullable: true })
  data?: AuthResponseData;

  @Field(() => [ErrorData])
  errors: ErrorData[];
}
