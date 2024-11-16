import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';  // Asegúrate de que esta ruta sea correcta
import { CreateUserDto } from './dto/create-user.dto';  // Asegúrate de que esta ruta sea correcta
import { LoginDto } from './dto/login.dto';  // Asegúrate de que esta ruta sea correcta

@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) {}  // Inyectamos AuthService

  // Ruta para registro de usuario
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.authService.register(createUserDto);  // Usamos el servicio AuthService para registrar
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
