import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  // Create a new reservation
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const reservation = this.reservationRepository.create(createReservationDto);
    return this.reservationRepository.save(reservation);
  }

  // Find all reservations
  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  // Find a single reservation by ID
  async findOne(id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({ where: { id } });
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  // Update a reservation
  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    await this.reservationRepository.update(id, updateReservationDto);
    return this.findOne(id); // Return the updated reservation
  }

  // Remove a reservation
  async remove(id: number): Promise<void> {
    const result = await this.reservationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
  }
}
