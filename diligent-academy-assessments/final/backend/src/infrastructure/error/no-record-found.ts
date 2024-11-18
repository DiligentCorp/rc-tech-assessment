import { InfrastructureError } from "./infrastructure.error";

export class NoRecordFound extends InfrastructureError {
  constructor(id: string) {
    super(`No record found with id: ${id}`);
  }
}
