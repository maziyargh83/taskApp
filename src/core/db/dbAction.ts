import { v4 } from "uuid";
import { db } from "~/core/db/db";
import { List } from "~/types";

export const createList = async ({ title, emoji }: Partial<List>) => {
  if (!title || !emoji) return;
  await db.List.add(new List(v4(), title, emoji, new Date(), false));
};
export const getLists = async (): Promise<List[]> => {
  return await db.List.toArray();
};
export const getList = async (id: string) => {
  return await db.List.get(id);
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
