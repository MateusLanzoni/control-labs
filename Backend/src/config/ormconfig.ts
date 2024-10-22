import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',  // or 'mysql', 'sqlite', etc.
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],  // Path to your entities
  synchronize: process.env.TYPEORM_SYNC === 'true',  // Set to false in production
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],  // Path to your migrations
  migrationsRun: true,  // Automatically run migrations when the app starts (optional)
  logging: process.env.NODE_ENV !== 'production',  // Enable logging in development
  autoLoadEntities: true,  // Automatically load entities for modules
};

export default ormConfig;
