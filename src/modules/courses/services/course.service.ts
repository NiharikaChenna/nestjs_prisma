import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async createCourse(createCourseType: Prisma.CourseCreateInput) {
    return this.prisma.course.create({ data: createCourseType });
  }

  async getAllCourses() {
    return this.prisma.course.findMany();
  }

  async updateCourse(id: number, updateCourseType: Prisma.CourseUpdateInput) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseType,
    });
  }

  async deleteCourse(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
