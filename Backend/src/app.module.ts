import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module'; // Ensure this path is correct and the file exists
import { User } from './modules/auth/user.entity';  // Ensure this path is correct
import { ReservationModule } from './modules/reservation/reservation.module'; // Example of another module
import { Reservation } from './modules/reservation/reservation.entity'; // Ensure this path is correct
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Makes environment variables globally available
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Reservation],  // Add all entities here
        synchronize: configService.get<string>('TYPEORM_SYNC') === 'true',  // Control sync with an env variable
        logging: configService.get<string>('NODE_ENV') !== 'production',  // Log queries only in development
        autoLoadEntities: true,  // Automatically load entities (recommended)
        // Optional connection pooling settings
        extra: {
          max: 5, // Maximum number of connections in the pool
        },
        // Optional migrations setup (for production environments)
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        migrationsRun: true,  // Automatically run migrations (optional)
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
    }),
    AuthModule,
    ReservationModule,
    UserModule,  // Example of another module you might have
  ],
})
export class AppModule {}
