import { Route } from "./route";
import { Database } from "../storage/database";
import { NotFoundError } from "./errors/not-found-error";
import { RateLimitError } from "./errors/rate-limit-error";

export class Api {
  private counter: number = 0;
  private timestamp: number = Date.now();
  private static readonly limit: number = 3;
  private static readonly duration: number = 50;

  constructor(
    private readonly database: Database,
    protected readonly routes: Route<any, any>[] = [],
  ) {}

  query<REQUEST, RESPONSE>(path: string, request: REQUEST): RESPONSE {
    const now = Date.now();
    if (now - this.timestamp > Api.duration) {
      this.counter = 0;
      this.timestamp = now;
    }

    if (this.counter >= Api.limit) {
      throw new RateLimitError();
    }

    this.counter++;

    const route = this.routes.find((route) => route.equals(path));
    if (route) {
      return route.handle(request, this.database);
    }
    throw new NotFoundError();
  }
}
