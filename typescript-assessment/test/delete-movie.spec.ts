import { expect, test } from "@jest/globals";
import { MovieRow, MovieTable } from "implementations/tables/movie-table";
import { InfrastructureBuilder } from "sealed/infrastructure-builder";
import { MyClient } from "implementations/my-client";

test("The client can delete movies by id", async () => {
  //Given
  const user = "user";
  const userFavorite: MovieRow = new MovieRow("1", {
    title: "The Matrix",
    year: 1999,
    runtime: 136,
  });
  const api = new InfrastructureBuilder()
    .withTable(new MovieTable([userFavorite]))
    .build();
  const client = new MyClient(api);

  //When
  await client.deleteMovie(userFavorite.id);

  //Then
  expect(await client.findMovieById(userFavorite.id)).toEqual([]);
  expect(await client.getUserFavorites(user)).toEqual([]);
});
