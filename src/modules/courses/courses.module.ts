import { Module } from '@nestjs/common';
import { CourseController } from './controller/couses.controller';
import { CourseService } from './services/course.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
