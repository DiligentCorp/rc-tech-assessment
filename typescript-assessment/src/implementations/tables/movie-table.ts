import { Table } from "../../sealed/storage/table";
import { Row } from "../../sealed/storage/row";

export type MovieValues = {
  title: string;
  year: number;
  runtime: number;
};

export class MovieRow extends Row<string, MovieValues> {
  equals(id: string): boolean {
    return this.id === id;
  }

  getValues(): MovieValues {
    return this.values;
  }
}

export class MovieTable extends Table<string, MovieValues> {
  static tableName = "movies";

  constructor(movies: MovieRow[] = []) {
    super(MovieTable.tableName, movies);
  }

  insert(row: MovieRow): void {
    this.rows.push(row);
  }

  delete(id: string): void {
    this.rows = this.rows.filter((row) => !row.equals(id));
  }
}
