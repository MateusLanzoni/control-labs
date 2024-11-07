import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto {
    date?: Date;          // Optional; use `Date` if the entity expects it
    timeSlot?: string;     // Optional; matches `timeSlot` field type in `Reservation`
    status?: string;       // Optional field for status
}