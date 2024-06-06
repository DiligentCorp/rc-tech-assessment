# Typescript assessment

## How to use

- You can run the tests using the command `npm test`, they are running in watch mode.

## Principles and rules

- You can change code in the `src/implementations` folder.
- **Do not modify anything in the `src/sealed` folder.**
- You will find tests in the `test` folder. You can write new tests, and you can **refactor** existing tests but please do not remove any tests or change the logic of the existing tests.
- Write each task in a separate commit, and do not amend commits, you will likely want to refactor your code as you go, but we want to see your progress.

## Tasks

### Task 1: Fix the getAllMovies method in the MyClient class

The `getAllMovies` method in the `MyClient` class is not working correctly. It should return a list of all movies in the
database. You can find the unit tests in `/test/get-all-movies.test.ts` that test this method.

### Task 2: Implement the findMovieById method in the MyClient class

The `findMovieById` method in the `MyClient` class is not implemented. It should return a single movie from the database
based on the given id.
The `findMovieById` should cache the result of the movie in memory so that subsequent calls to `findMovieById` with the
same id do not hit the API.
Implement unit tests for this method in `/test/find-movie-by-id.spec.ts`, and make sure to test the caching behavior.

### Task 3: Implement user and user favorites functionality

Implement the user and user favorites functionality, users are able to add movies to their favorites list.
You can find the unit tests in `/test/user-favorites.spec.ts` that test this functionality.

### Task 4: Implement the deleteMovie method in the MyClient class

The `deleteMovie` method in the `MyClient` class is not implemented. It should delete a movie from the database based on
the given id.
You can find the unit tests in `/test/delete-movie.spec.ts` that test this method.