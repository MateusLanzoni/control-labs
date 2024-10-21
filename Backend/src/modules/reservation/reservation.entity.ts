import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  timeSlot: string;

  // Add other fields as necessary
}
