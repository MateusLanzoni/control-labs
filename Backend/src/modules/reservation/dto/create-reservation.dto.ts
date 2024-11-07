import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  date: Date;           // Type matches the `Reservation` entity's `date` field
  timeSlot: string;      // Type matches the `Reservation` entity's `timeSlot` field
  status?: string;       // Optional field for status
}
