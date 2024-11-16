import { Injectable, UnauthorizedException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';  // Asegúrate de que esta ruta sea correcta

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,  // Inyectamos JwtService
  ) {}

  // Método para validar usuario
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username); // Aquí se debe llamar al método findByUsername
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: hashedPassword, ...result } = user;  // Evitamos que la contraseña se retorne
    return result;
  }

  // Método para login
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };  // Generamos el payload
    return {
      access_token: this.jwtService.sign(payload),  // Generamos el JWT con el payload
    };
  }

  // Método para registrar un nuevo usuario
  async register(userData: { username: string; email: string; password: string }) {
    const existingUser = await this.userService.findByEmail(userData.email);  // Verificamos si el correo ya está registrado
    if (existingUser) {
      throw new BadRequestException('Email is already in use');  // Si el correo ya existe, lanzamos una excepción
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);  // Ciframos la contraseña
    const user = await this.userService.create({
      ...userData,
      password: hashedPassword,  // Guardamos la contraseña cifrada
    });

    const payload = { username: user.username, sub: user.id };  // Creamos el payload
    return {
      access_token: this.jwtService.sign(payload),  // Devolvemos el token JWT
    };
  }
}
