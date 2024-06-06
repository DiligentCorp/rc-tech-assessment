import { faker } from "@faker-js/faker";
import { MovieRow, MovieValues } from "implementations/tables/movie-table";

export function createMovie(): MovieValues {
  return {
    title: faker.animal.cat(),
    year: faker.date.past().getFullYear(),
    runtime: faker.number.int({ min: 60, max: 240 }),
  };
}

export function createNMovies(n: number): MovieRow[] {
  return Array.from({ length: n }, () => createMovie()).map(
    (movie, index) => new MovieRow(index.toString(), movie),
  );
}
