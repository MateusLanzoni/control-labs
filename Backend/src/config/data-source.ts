import { DataSource } from 'typeorm';
import { Reservation } from '../modules/reservation/reservation.entity';
import { User } from '../modules/auth/user.entity';

const AppDataSource = new DataSource({
  type: 'postgres',  // or your database type
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Reservation],  // Add all your entities here
  migrations: ['src/migrations/*.ts'],
  synchronize: false,  // Set to false in production
  logging: true,
});

export default AppDataSource;
