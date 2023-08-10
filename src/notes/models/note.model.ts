import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

export enum Categories {
  TASK = 'Task',
  IDEA = 'Idea',
  RANDTHOUGHT = 'Random thought',
}

@Table({ timestamps: false })
export class Note extends Model {
  @Column({ type: DataType.STRING })
  name: string;

  @Default(new Date())
  @Column({ type: DataType.DATE })
  created: Date;

  @Column({ type: DataType.ENUM({ values: Object.keys(Categories) }) })
  category: Categories;

  @Column({ type: DataType.TEXT })
  content: string;

  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  isArchive: boolean;

  @Column({ type: DataType.STRING })
  dates: string;
}
