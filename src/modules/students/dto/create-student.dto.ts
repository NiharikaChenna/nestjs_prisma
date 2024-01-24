import { IsNotEmpty } from 'class-validator';

export class CreateStudentDTO {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @IsNotEmpty({ message: 'phoneNumber is required' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'address is required' })
  address: string;
}
