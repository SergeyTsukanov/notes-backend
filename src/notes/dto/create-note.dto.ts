import { IsEnum, IsNotEmpty } from 'class-validator';
import { Categories } from '../models/note.model';

export class CreateNoteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsEnum(Categories)
  category: Categories;
}
