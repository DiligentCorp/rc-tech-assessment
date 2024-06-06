export abstract class Row<ID, VALUES> {
  constructor(
    public readonly id: ID,
    protected readonly values: VALUES,
  ) {}

  abstract equals(id: ID): boolean;

  abstract getValues(): VALUES;
}
