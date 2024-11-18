import { InfrastructureError } from "./infrastructure.error";

export class NoRecordUpdated extends InfrastructureError {
  constructor(id: string) {
    super(`No record updated with id: ${id}`);
  }
}
