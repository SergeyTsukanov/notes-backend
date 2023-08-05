import { v4 as uuidv4 } from 'uuid';
import { parseDates } from '../utils/parseDates';
export enum Categories {
  TASK = 'Task',
  IDEA = 'Idea',
  RANDTHOUGHT = 'Random thought',
}
export class Note {
  id: string;
  name: string;
  created: Date;
  category: Categories;
  content: string;
  isArchive: boolean;
  dates: string;

  constructor(name, content, category) {
    this.id = uuidv4();
    this.name = name;
    this.created = new Date();
    this.content = content;
    this.category = category;
    this.isArchive = false;
    this.dates = parseDates(content);
  }
}
