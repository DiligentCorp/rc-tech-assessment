import { Row } from "./row";
import { Pagination } from "./pagination";

export type SelectOptions<
  ID extends number | string | Record<any, any>,
  VALUES extends Record<any, any>,
> = {
  pagination: Pagination;
  predicate?: (row: Row<ID, VALUES>) => boolean;
};

export abstract class Table<
  ID extends number | string | Record<any, any>,
  VALUES extends Record<any, any>,
> {
  protected constructor(
    public readonly name: string,
    protected rows: Row<ID, VALUES>[] = [],
  ) {}

  abstract insert(row: Row<ID, VALUES>): void;

  abstract delete(id: ID): void;

  select(options: SelectOptions<ID, VALUES>): Row<ID, VALUES>[] {
    const { page, pageSize } = options.pagination;
    return this.rows
      .filter(options.predicate || (() => true))
      .slice((page - 1) * pageSize, page * pageSize);
  }
}
