import { Table } from "./storage/table";
import { Database } from "./storage/database";
import { Route } from "./backend/route";
import { Api } from "./backend/api";

export class InfrastructureBuilder {
  private routes: Route<Record<any, any>, Record<any, any>>[] = [];
  private tables: Table<
    number | string | Record<any, any>,
    Record<any, any>
  >[] = [];

  withRoute<
    REQUEST extends Record<any, any>,
    RESPONSE extends Record<any, any>,
  >(route: Route<REQUEST, RESPONSE>) {
    this.routes.push(route);
    return this;
  }

  withTable<
    ID extends number | string | Record<any, any>,
    VALUES extends Record<any, any>,
  >(table: Table<ID, VALUES>) {
    this.tables.push(table);
    return this;
  }

  build(): Api {
    const database = new Database(this.tables);
    return new Api(database, this.routes);
  }
}
