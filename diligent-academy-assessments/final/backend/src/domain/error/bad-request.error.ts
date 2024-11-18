export class BadRequestError extends Error {
  constructor(property: string, reason: string) {
    super(`Bad request received: "${property}" - ${reason}`);
  }
}
