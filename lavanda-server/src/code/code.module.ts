import { Module } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeController } from './code.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { Code } from './code.model';

@Module({
  providers: [CodeService],
  controllers: [CodeController],
  imports: [
    SequelizeModule.forFeature([User, Code]),
  ],
  exports: [
    CodeService
  ]
})
export class CodeModule {}
