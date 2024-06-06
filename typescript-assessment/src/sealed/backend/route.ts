import { Database } from "../storage/database";

export abstract class Route<
  REQUEST extends Record<any, any>,
  RESPONSE extends Record<any, any>,
> {
  protected constructor(protected readonly path: string) {}

  equals(path: string): boolean {
    return this.path === path;
  }

  abstract handle(request: REQUEST, database: Database): RESPONSE;
}
