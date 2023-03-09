import Dexie, { Table } from "dexie";
import { Task, List, SubCategory } from "~/types";

export class TaskDB extends Dexie {
  Task!: Table<Task>;
  List!: Table<List>;
  SubCategory!: Table<SubCategory>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      Task: "id, title, categoryId, subCategoryId, status, createDate, isDeleted",
      List: "id, title, emoji, createDate, isDeleted",
      SubCategory: "id, title, ListId, createDate, isDeleted",
    });
  }
}

export const db = new TaskDB();
