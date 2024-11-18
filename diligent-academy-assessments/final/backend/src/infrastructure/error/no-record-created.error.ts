import { InfrastructureError } from "./infrastructure.error";

export class NoRecordCreated extends InfrastructureError {
  constructor() {
    super(`No record was created`);
  }
}
