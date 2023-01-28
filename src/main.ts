import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
  const port = process.env.SERVER_PORT || 3000;
  console.log(`listening on port ${port}`);
}
bootstrap();
