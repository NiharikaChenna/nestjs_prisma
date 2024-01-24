import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async createStudent(createStudentDto: Prisma.StudentCreateInput) {
    // const { email } = createStudentDto;
    // const existingStudent = await this.prisma.student.findUnique({
    //   where: {
    //     email: { equals: email },
    //   },
    // });
    // if (existingStudent) {
    //   throw new ConflictException('Email already exists');
    // }
    return this.prisma.student.create({ data: createStudentDto });
  }

  async getAllStudents() {
    return this.prisma.student.findMany({ include: { courses: true } });
  }

  async getStudent(studentId: number) {
    return this.prisma.student.findUnique({
      where: { id: studentId },
    });
  }

  async updateStudent(id: number, updateStudentDto: Prisma.StudentUpdateInput) {
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async deleteStudent(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
