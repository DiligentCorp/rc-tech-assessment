# Coding challenge

## How to use

- You can run the tests using the command `npm test` to check your work, they are running in watch mode, meaning you do
  not need to rerun them when you change your code.

## Principles and rules

- You can change code in the `src/implementations` folder.
- **Do not modify anything in the `src/sealed` and `test` folders.**

## Tasks

Implement the methods in the `user.js` file.

The `User` class has the following methods:

- `borrow(book, library)` - This method should add the book to the user's borrowed books list, and
  remove the book from the library's available books list.


- `hasBook(book)` - This method should return a boolean if the user has the book borrowed.


- `return(book library)` - This method should remove the book from the user's borrowed books list,
  and
  add the book to the library's available books list. It should return a boolean if it could return the book
  because the user had it borrowed.


- `getBookNames()` - This method should return the list of names of the books the user has borrowed.