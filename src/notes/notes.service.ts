import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesRepository } from './notes.repository';
import { Categories } from './models/note.model';

@Injectable()
export class NotesService {
  constructor(private notesRepository: NotesRepository) {}
  async create(createNoteDto: CreateNoteDto) {
    return await this.notesRepository.create(createNoteDto);
  }

  async findAll() {
    return await this.notesRepository.findAll();
  }

  async findOne(id: string) {
    const note = await this.notesRepository.findById(id);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return note;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const note = await this.notesRepository.findById(id);
    console.log(note);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return await this.notesRepository.update(id, updateNoteDto);
  }

  async remove(id: string) {
    const note = await this.notesRepository.findById(id);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    await this.notesRepository.delete(id);
  }

  async getStats() {
    const statTable = {
      [Categories.IDEA]: { archived: 0, active: 0 },
      [Categories.TASK]: { archived: 0, active: 0 },
      [Categories.RANDTHOUGHT]: { archived: 0, active: 0 },
    };

    for (const note of await this.notesRepository.findAll()) {
      if (note.isArchive) {
        statTable[note.category].archived += 1;
      } else {
        statTable[note.category].active += 1;
      }
    }

    return statTable;
  }
}
