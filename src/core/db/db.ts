import Dexie, { Table } from "dexie";
import { Task } from "~/types";

export class TaskDB extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  Task!: Table<Task>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      Task: "id, title, category, status", // Primary key and indexed props
    });
  }
}

export const db = new TaskDB();
