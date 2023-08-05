import { Injectable } from '@nestjs/common';
import { Note } from './entities/note.entity';
import initialNotes from './constants/notes-data';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { parseDates } from './utils/parseDates';

@Injectable()
export class NotesRepository {
  private data: Note[] = [...initialNotes];

  create(createNoteDto: CreateNoteDto): Note {
    const newNote = new Note(
      createNoteDto.name,
      createNoteDto.content,
      createNoteDto.category,
    );
    this.data.push(newNote);
    return newNote;
  }

  findAll(): any[] {
    return this.data;
  }

  findById(id: string): Note {
    return this.data.find((item) => item.id === id);
  }

  update(id: string, updateNoteDto: UpdateNoteDto): any {
    this.data = this.data.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          ...updateNoteDto,
          dates: parseDates(updateNoteDto.content),
        };
      } else {
        return note;
      }
    });
    return this.findById(id);
  }

  delete(id: string): any {
    this.data = this.data.filter((note) => note.id !== id);
  }
}
