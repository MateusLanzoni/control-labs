import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module'; // Import the UserModule

@Module({
  imports: [
    forwardRef(() => UserModule), // Use forwardRef here
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // Use your JWT secret
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService], // Export AuthService for use in UserModule
})
export class AuthModule {}
