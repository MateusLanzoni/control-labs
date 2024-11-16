import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async login(loginDto: { email: string; password: string }) {
    const user = await this.userRepository.findOne({ where: { email: loginDto.email } });
    if (!user) throw new Error('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }

  async findById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
