import Dexie, { Table } from "dexie";
import { v4 } from "uuid";
import { Task, List } from "~/types";

export class TaskDB extends Dexie {
  Task!: Table<Task>;
  List!: Table<List>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      Task: "objectId, title, categoryId, status, createDate, isDeleted, favorite, image",
      List: "objectId, title, emoji, createDate, isDeleted",
    });
    this.on("populate", () => {
      const id1 = v4();
      const id2 = v4();
      this.List.bulkAdd([
        {
          objectId: id1,
          title: "Personal",
          emoji: "👨‍💻",
          createDate: new Date(),
          isDeleted: false,
        },
        {
          objectId: id2,
          title: "Work",
          emoji: "💼",
          createDate: new Date(),
          isDeleted: false,
        },
      ]);
      this.Task.bulkAdd([
        {
          objectId: v4(),
          title: "Buy Groceries",
          categoryId: id1,
          status: "PENDING",
          createDate: new Date(),
          isDeleted: false,
          favorite: true,
          image: undefined,
          order: 1,
        },
        {
          objectId: v4(),
          title: "Buy Milk",
          categoryId: id1,
          status: "DONE",
          createDate: new Date(),
          isDeleted: false,
          favorite: false,
          image: undefined,
          order: 2,
        },
        {
          objectId: v4(),
          title: "Buy IceCream",
          categoryId: id1,
          status: "DONE",
          createDate: new Date(),
          isDeleted: true,
          favorite: false,
          image: undefined,
          order: 2,
        },
      ]);
    });
  }
}

export const db = new TaskDB();
