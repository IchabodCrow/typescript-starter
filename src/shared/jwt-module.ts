import { JwtModule } from '@nestjs/jwt';

export default JwtModule.register({
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '30 days' },
});
