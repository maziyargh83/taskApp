import Dexie, { Table } from "dexie";
import { Task, List, Label } from "~/types";

export class TaskDB extends Dexie {
  Task!: Table<Task>;
  List!: Table<List>;
  Label!: Table<Label>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      Task: "objectId, title, categoryId, status, createDate, isDeleted, favorite, image",
      List: "objectId, title, emoji, createDate, isDeleted",
      Label: "objectId, title, ListId, createDate, isDeleted",
    });
  }
}

export const db = new TaskDB();
