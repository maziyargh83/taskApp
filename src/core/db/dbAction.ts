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
export const updateTask = async (data: Task) => {
  return await db.Task.where("objectId")
    .equals(data.objectId)
    .modify((item) => {
      if (!!data.status) item.status = data.status;
      if (!!data.title) item.title = data.title;
      item.isDeleted = data.isDeleted;
      if (!!data.image) item.image = data.image;
      item.favorite = data.favorite;
    });
};
export const updateMany = async (data: Task[]) => {
  await db.Task.bulkPut(data);
};
export const addTask = async ({
  title,
  categoryId,
  favorite,
  status,
  image,
  order,
}: Partial<Task>) => {
  if (!title || !categoryId || !status) return;
  const _order =
    order || (await db.Task.where("categoryId").equals(categoryId).count()) + 1;
  await db.Task.add(
    new Task(
      v4(),
      title,
      categoryId,
      status,
      favorite!,
      new Date(),
      false,
      _order ?? 0,
      image
    )
  );
};
export const removeTaskAndList = async (categoryId: string) => {
  await db.Task.where("categoryId").equals(categoryId).delete();
  await db.List.where("objectId").equals(categoryId).delete();
};
