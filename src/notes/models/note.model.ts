import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum Categories {
  TASK = 'Task',
  IDEA = 'Idea',
  RANDTHOUGHT = 'Random thought',
}

@Table
export class Note extends Model {
  @Column
  name: string;

  @Column({ defaultValue: new Date() })
  created: Date;

  @Column({ type: DataType.ENUM({ values: Object.keys(Categories) }) })
  category: Categories;

  @Column
  content: string;
  @Column({ defaultValue: false })
  isArchive: boolean;

  @Column
  dates: string;
}
