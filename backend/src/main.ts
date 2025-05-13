import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Uptime Monitoring API')
    .setDescription('API documentation for the uptime monitoring service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
