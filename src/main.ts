import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 8080;

  const apiDocsConfig = new DocumentBuilder()
    .setTitle('Backend API Services')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

    app.setGlobalPrefix('api/v1');

    const document = SwaggerModule.createDocument(app, apiDocsConfig);
    SwaggerModule.setup('api/v1/docs', app, document);

    await app.listen(port);
  console.log(`Backend running on http://localhost:${port}`);
}
bootstrap();
