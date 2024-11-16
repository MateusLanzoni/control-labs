import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity/user.entity';
import * as dotenv from 'dotenv';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '2b8e70c7d43af1c901b6a8fbc5bb6941dabb3f3554f2fb89abdcce8e72bc0983', // Fallback for local development
      signOptions: { expiresIn: '1h' },
    }),
    forwardRef(() => AuthModule), // Use forwardRef here
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Export UserService
})
export class UserModule {}
