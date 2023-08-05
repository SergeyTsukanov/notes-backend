import { Categories, Note } from '../entities/note.entity';
import { v4 as uuidv4 } from 'uuid';
import { parseDates } from '../utils/parseDates';

const initialNotes: Note[] = [
  {
    id: uuidv4(),
    name: 'Simple Idea',
    created: new Date(),
    category: Categories.TASK,
    content: 'Go to the park at 11/07/2023 ',
    isArchive: false,
    dates: parseDates('Go to the park at 11/07/2023'),
  },
  {
    id: uuidv4(),
    name: 'learn React',
    created: new Date(),
    category: Categories.IDEA,
    content: 'build task notes app',
    isArchive: false,
    dates: parseDates('build task notes app'),
  },
  {
    id: uuidv4(),
    name: 'learn Contenx API',
    created: new Date(),
    category: Categories.RANDTHOUGHT,
    content: 'For better understanding react',
    isArchive: false,
    dates: parseDates('For better understanding react'),
  },
  {
    id: uuidv4(),
    name: 'Firefox',
    created: new Date(),
    category: Categories.TASK,
    content: 'Install new version of Firefox',
    isArchive: false,
    dates: parseDates('Install new version of Firefox'),
  },
  {
    id: uuidv4(),
    name: 'Sopping list',
    created: new Date(),
    category: Categories.IDEA,
    content: 'tomato,bread',
    isArchive: false,
    dates: parseDates('tomato,bread'),
  },
  {
    id: uuidv4(),
    name: 'Books',
    created: new Date(),
    category: Categories.RANDTHOUGHT,
    content: 'The Lean Startup',
    isArchive: false,
    dates: parseDates('The Lean Startup'),
  },
  {
    id: uuidv4(),
    name: 'newFeature',
    created: new Date(),
    category: Categories.IDEA,
    content:
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    isArchive: false,
    dates: parseDates(
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    ),
  },
];

export default initialNotes;
