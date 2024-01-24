import { Module } from '@nestjs/common';
import { StudentController } from './controller/students.controller';
import { StudentService } from './services/students.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
