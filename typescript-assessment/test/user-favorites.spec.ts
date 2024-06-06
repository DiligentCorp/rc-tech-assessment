import { expect, test } from "@jest/globals";
import { MovieRow, MovieTable } from "implementations/tables/movie-table";
import { InfrastructureBuilder } from "sealed/infrastructure-builder";
import { MyClient } from "implementations/my-client";
import { fail } from "./utils/fail";

test("Users can favorite movies", async () => {
  //Given
  const user1 = "user-1";
  const user2 = "user-2";
  const user1Favorite: MovieRow = new MovieRow("1", {
    title: "The Matrix",
    year: 1999,
    runtime: 136,
  });
  const user2Favorite: MovieRow = new MovieRow("2", {
    title: "The Matrix Reloaded",
    year: 2003,
    runtime: 138,
  });
  const api = new InfrastructureBuilder()
    .withTable(new MovieTable([user1Favorite, user2Favorite]))
    .build();
  const client = new MyClient(api);

  //When
  fail("Not implemented yet");

  //Then
  expect(await client.getUserFavorites(user1)).toEqual([user1Favorite]);
  expect(await client.getUserFavorites(user2)).toEqual([user2Favorite]);
});
