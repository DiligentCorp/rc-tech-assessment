import { describe, expect, test } from "@jest/globals";
import {
  MovieRow,
  MovieTable,
} from "../src/implementations/tables/movie-table";
import { createNMovies } from "../src/implementations/utils/create-movie";
import { InfrastructureBuilder } from "../src/sealed/infrastructure-builder";
import { GetMoviesRoute } from "../src/implementations/routes/get-movies-route";
import { MyClient } from "../src/implementations/my-client";

describe("The client can list every movie in the database", () => {
  const testNumberOfMovies = [0, 1, 2, 10, 20, 25, 50, 100, 161, 300];

  testNumberOfMovies.forEach((numberOfMovies) => {
    test(`When there are ${numberOfMovies} movies`, async () => {
      //Given
      const movies: MovieRow[] = createNMovies(numberOfMovies);

      const infrastructureBuilder = new InfrastructureBuilder();
      const api = infrastructureBuilder
        .withTable(new MovieTable(movies))
        .withRoute(new GetMoviesRoute())
        .build();

      const myClient = new MyClient(api);

      //When
      const allMovies = await myClient.getAllMovies();

      //Then
      expect(allMovies).toEqual(movies);
    });
  });
});
