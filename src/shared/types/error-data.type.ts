import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class ErrorData {
  @Field()
  message: string;

  @Field({ nullable: true })
  attributeName?: string;
}
