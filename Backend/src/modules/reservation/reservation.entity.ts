import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 50 })
  timeSlot: string;

  // Add other fields as needed
  @Column({ type: 'varchar', length: 100 })
  status: string; // Example: 'pending', 'confirmed', 'canceled'
}
