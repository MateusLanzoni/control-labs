import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto.ts';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users') // Base route will be /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Register a new user
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  // Login a user
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.userService.login(loginDto);
  }

  // Get current user details (protected route)
  @UseGuards(AuthGuard('jwt')) // Only accessible with a valid JWT
  @Get('me')
  async getCurrentUser(@Req() request: Request) {
    const user = request.user;
    return this.userService.findById(user['id']);
  }
}
