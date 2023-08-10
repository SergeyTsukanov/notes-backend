import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { parseDates } from './utils/parseDates';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './models/note.model';

@Injectable()
export class NotesRepository {
  constructor(@InjectModel(Note) private noteModel: typeof Note) {}
  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote = await this.noteModel.create({
      ...createNoteDto,
      dates: parseDates(createNoteDto.content),
    });
    return newNote;
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.findAll();
  }

  async findById(id: string): Promise<Note> {
    return this.noteModel.findOne({ where: { id } });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const noteToUpdate = await this.findById(id);
    await noteToUpdate.update({
      ...updateNoteDto,
      dates: parseDates(updateNoteDto.content),
    });
    await noteToUpdate.save();
    return noteToUpdate;
  }

  async delete(id: string): Promise<void> {
    await this.noteModel.destroy({ where: { id } });
  }
}
