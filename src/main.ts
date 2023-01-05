import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // decorator 이외에는 거름
  }));
  app.enableCors({ // cors 해결
    origin: ["http://localhost:3000"],
    credentials: true,
  });
  app.use(cookieParser()); // cookie parser 사용
  await app.listen(3080);
}
bootstrap();
