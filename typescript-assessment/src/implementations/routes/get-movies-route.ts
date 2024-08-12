import { MovieRow, MovieTable } from "../tables/movie-table";
import { Route } from "../../sealed/backend/route";
import { Pagination } from "../../sealed/storage/pagination";
import { Database } from "../../sealed/storage/database";

export class GetMoviesRoute extends Route<Pagination, MovieRow[]> {
  static readonly path = "/movies";

  constructor() {
    super(GetMoviesRoute.path);
  }

  handle(pagination: Pagination, database: Database): MovieRow[] {
    const table = database.getTable<MovieTable>(MovieTable.tableName);
    return table.select({
      pagination: pagination,
    });
  }
}
