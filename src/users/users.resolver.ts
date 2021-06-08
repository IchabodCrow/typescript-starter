import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';

import AuthResponse from './dto/auth-response.output';
import SignInRequest from './dto/sign-in-request.input';
import SignInService from './sign-in.service';

@Resolver()
export default class UsersResolver {
  constructor(private readonly signInService: SignInService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => AuthResponse)
  async signIn(
    @Args('userData') userData: SignInRequest,
  ): Promise<AuthResponse> {
    console.log('123');
    return this.signInService.process(userData);
  }
}
