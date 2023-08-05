import { IsBoolean, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Categories } from '../entities/note.entity';

export class UpdateNoteDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(Categories)
  category: Categories;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  isArchive: boolean;
}
