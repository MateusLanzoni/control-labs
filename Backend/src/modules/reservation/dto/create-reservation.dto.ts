import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsString()
  @IsNotEmpty()
  readonly timeSlot: string;

  // Add other fields as needed with appropriate validation decorators
}
