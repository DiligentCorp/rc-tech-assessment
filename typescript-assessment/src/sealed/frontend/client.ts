import { Row } from "sealed/storage/row";

export interface Client {
  getAllMovies<T extends Row<any, any>>(): Promise<T[]>;

  findMovieById<T extends Row<any, any>>(id: string): Promise<T | undefined>;

  getUserFavorites<T extends Row<any, any>>(userId: string): Promise<T[]>;

  deleteMovie(id: string): Promise<void>;
}
