import { v4 } from "uuid";
import { db } from "~/core/db/db";
import { List, Task } from "~/types";

export const createList = async ({ title, emoji }: Partial<List>) => {
  if (!title || !emoji) return;
  await db.List.add(new List(v4(), title, emoji, new Date(), false));
};

export const updateList = async (data: List) => {
  return await db.List.where("objectId")
    .equals(data.objectId)
    .modify((item) => {
      item.emoji = data.emoji;
      item.title = data.title;
      item.isDeleted = data.isDeleted;
    });
};
export const addTask = async ({
  title,
  categoryId,
  favorite,
  status,
  image,
}: Partial<Task>) => {
  if (!title || !categoryId || !status) return;
  await db.Task.add(
    new Task(
      v4(),
      title,
      categoryId,
      status,
      favorite!,
      new Date(),
      false,
      image
    )
  );
};
