import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CreateCourseDto } from '../dto/create-course.dto';
import { CourseService } from '../services/course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async createCourse(@Body() createCourseDTO: CreateCourseDto) {
    return this.courseService.createCourse(createCourseDTO);
  }

  @Get()
  async getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Put(':id')
  async updateCourse(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    return this.courseService.deleteCourse(id);
  }
}
