import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Categories } from './entities/note.entity';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
  constructor(private notesRepository: NotesRepository) {}
  create(createNoteDto: CreateNoteDto) {
    return this.notesRepository.create(createNoteDto);
  }

  findAll() {
    return this.notesRepository.findAll();
  }

  findOne(id: string) {
    const note = this.notesRepository.findById(id);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return note;
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    const note = this.notesRepository.findById(id);
    console.log(note);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return this.notesRepository.update(id, updateNoteDto);
  }

  remove(id: string) {
    const note = this.notesRepository.findById(id);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    this.notesRepository.delete(id);
  }

  getStats() {
    const statTable = {
      [Categories.IDEA]: { archived: 0, active: 0 },
      [Categories.TASK]: { archived: 0, active: 0 },
      [Categories.RANDTHOUGHT]: { archived: 0, active: 0 },
    };

    for (const note of this.notesRepository.findAll()) {
      if (note.isArchive) {
        statTable[note.category].archived += 1;
      } else {
        statTable[note.category].active += 1;
      }
    }

    return statTable;
  }
}
