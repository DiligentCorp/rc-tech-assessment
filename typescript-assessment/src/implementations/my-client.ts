import { Client } from "sealed/frontend/client";
import { Pagination } from "sealed/storage/pagination";
import { Api } from "sealed/backend/api";
import { GetMoviesRoute } from "./routes/get-movies-route";

export class MyClient implements Client {
  constructor(private readonly api: Api) {}

  async getAllMovies<MovieRow>(): Promise<MovieRow[]> {
    return this.api.query<Pagination, MovieRow[]>(GetMoviesRoute.path, {
      page: 0,
      pageSize: 25,
    });
  }

  async findMovieById<MovieRow>(id: string): Promise<MovieRow | undefined> {
    throw new Error("Method not implemented.");
  }

  async getUserFavorites<MovieRow>(userId: string): Promise<MovieRow[]> {
    throw new Error("Method not implemented.");
  }

  async deleteMovie(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
