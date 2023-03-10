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
