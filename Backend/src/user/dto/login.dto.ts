import { IsString, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;  // El campo email debe ser un correo electrónico válido

  @IsString()
  password: string;  // El campo password debe ser una cadena de texto
}
