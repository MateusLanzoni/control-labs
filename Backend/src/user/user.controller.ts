import { Controller, Post, Body, BadRequestException, Get } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';  // Asegúrate de que esta ruta sea correcta
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';  // Asegúrate de que esta ruta sea correcta
import { LoginDto } from './dto/login.dto';  // Asegúrate de que esta ruta sea correcta

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService, // Inject AuthService
  ) {}

  // Ruta para registro de usuario
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.register(createUserDto);
        } catch (error) {
      throw new BadRequestException('Registration failed');
    }
  }

  // Ruta para login de usuario
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authService.login(loginDto);  // Usamos el servicio AuthService para el login
    } catch (error) {
      throw new BadRequestException('Login failed');
    }
  }
}
