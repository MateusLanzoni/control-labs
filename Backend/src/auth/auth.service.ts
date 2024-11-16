import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userData: { username: string; email: string; password: string }) {
    const existingUser = await this.userService.findByEmail(userData.email);
    if (existingUser) {
      throw new UnauthorizedException('Email is already in use');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.userService.create({
      ...userData,
      password: hashedPassword,
    });
    return user;
  }
}
