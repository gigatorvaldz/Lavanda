import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { configuration } from 'configuration';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ConfigModule.forRoot({
    envFilePath: `${process.cwd()}/.${process.env.NODE_ENV}.env`,
    load: [configuration]
  }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      synchronize: true,
      autoLoadModels: true
    }),
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
