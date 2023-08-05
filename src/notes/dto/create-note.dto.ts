import { IsEnum, IsNotEmpty } from 'class-validator';
import { Categories } from '../entities/note.entity';

export class CreateNoteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsEnum(Categories)
  category: Categories;
}
