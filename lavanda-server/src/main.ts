import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  try {

    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    
    await app.listen(PORT);

  } catch (error) {
    console.log(error);
  }

}
bootstrap();
