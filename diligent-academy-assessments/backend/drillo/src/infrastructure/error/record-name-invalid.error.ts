export class RecordNameInvalid extends Error {
  constructor(name: string) {
    super(`Record name is invalid: ${name}`);
  }
}
