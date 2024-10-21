import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // Endpoint to create a new reservation
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
    return this.reservationService.create(createReservationDto);
  }

  // Endpoint to get all reservations
  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  // Endpoint to get a reservation by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Reservation> {
    return this.reservationService.findOne(id);
  }

  // Endpoint to update a reservation by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.update(id, updateReservationDto);
  }

  // Endpoint to delete a reservation by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.reservationService.remove(id);
  }
}
