import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

import SignInRequest from './dto/sign-in-request.input';
import AuthResponse from './dto/auth-response.output';
import { User } from './user.entity';

@Injectable()
export default class SignInService {
  private readonly passwordErrorMessage = 'Invalid password';
  private readonly authMethodErrorMessage = 'userUsesOauth';
  private readonly emailErrorMessage = 'Invalid email';
  private readonly verificationErrorMessage =
    'User has not passed verification';
  private user: User | undefined;

  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async process(userData: SignInRequest): Promise<AuthResponse> {
    this.user = await this.userRepository.findOne({
      email: userData.email.trim().toLowerCase(),
    });
    console.log(this.user);
    let errorMessage: string | undefined;
    if (!this.user) errorMessage = this.emailErrorMessage;
    else if (!this.user.encryptedPassword)
      errorMessage = this.authMethodErrorMessage;
    else if (await this.invalidPassword(userData))
      errorMessage = this.passwordErrorMessage;
    if (errorMessage) {
      return { data: null, errors: [{ message: errorMessage }] };
    }
    const payload = { id: this.user.id, email: this.user.email };

    return {
      data: { token: this.jwtService.sign(payload), user: payload },
      errors: [],
    };
  }

  private async invalidPassword(userData: SignInRequest): Promise<boolean> {
    return !(await compare(userData.password, this.user.encryptedPassword));
  }
}
