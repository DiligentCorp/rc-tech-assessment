import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = open({
  filename: "./database.sqlite",
  driver: sqlite3.Database,
});

export async function close(): Promise<void> {
  const database = await db;
  await database.close();
}
