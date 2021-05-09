import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.HEYDAY_GRAPGQL_PORT);
  console.log(`Heyday application is running on port ${await app.getUrl()}`);
})();
