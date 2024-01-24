import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentService } from '../services/students.service';
import { CreateStudentDTO } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@UsePipes(new ValidationPipe())
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() createStudentDTO: CreateStudentDTO) {
    return this.studentService.createStudent(createStudentDTO);
  }

  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.studentService.getStudent(id);
  }

  @Get()
  async getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
