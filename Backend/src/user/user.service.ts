import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service'; // Import AuthService
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';  // Asegúrate de que esta ruta sea correcta
import { CreateUserDto } from './dto/create-user.dto';  // Asegúrate de que esta ruta sea correcta
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  @Post('login')  
    oe(){
    return 'Hola';
  }

  // Buscar un usuario por nombre de usuario
  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  // Buscar un usuario por email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Crear un nuevo usuario
  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  // Buscar un usuario por ID
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async register(createUserDto: CreateUserDto) {
    const { username, email, password } = createUserDto;

    // Check if the user already exists
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('Email is already registered');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    return await this.userRepository.save(newUser);
  }

}
