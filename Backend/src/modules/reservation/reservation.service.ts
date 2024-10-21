import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  // Method to create a new reservation
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const reservation = this.reservationRepository.create(createReservationDto);
    return this.reservationRepository.save(reservation);
  }

  // Method to find all reservations
  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  // Method to find a reservation by ID
  async findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({ where: { id } });
  }

  // Method to update a reservation
  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    await this.reservationRepository.update(id, updateReservationDto);
    return this.findOne(id);
  }

  // Method to remove a reservation
  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
