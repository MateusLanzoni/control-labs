import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');  // Set the global prefix to /api

  app.enableCors();  // Enable CORS
  await app.listen(3000);  // The backend will listen on port 3000
}
bootstrap();
