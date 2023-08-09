import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NotesRepository } from './notes.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './models/note.model';

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}
