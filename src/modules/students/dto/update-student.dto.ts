import { PartialType } from '@nestjs/swagger';
import { CreateStudentDTO } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDTO) {
  id: number;
}
