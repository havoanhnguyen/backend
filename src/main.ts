import './moduleAlias';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@app/app.module';
import { APP_PORT } from '@config/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // TODO: custom cors base on ENV
  app.enableCors({ origin: '*' });

  const builder = new DocumentBuilder()
    .setTitle('Draft API/Socket')
    .setDescription('The draft API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('api', app, document);

  await app.listen(APP_PORT);
}
bootstrap();
