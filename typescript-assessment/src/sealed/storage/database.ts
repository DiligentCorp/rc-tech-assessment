import { Table } from "./table";

export class Database {
  constructor(protected readonly tables: Table<any, any>[] = []) {}

  getTable<T extends Table<any, any>>(name: string): T {
    return this.tables.find((table) => table.name === name) as T;
  }
}
