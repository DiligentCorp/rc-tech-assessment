import {test, describe, expect} from "@jest/globals";
import {Book} from "../src/sealed/book";
import {Library} from "../src/sealed/library";
import {User} from "../src/implementations/user";

describe('User', () => {
    describe('can', () => {
        test("borrow a book", async () => {
            //Given
            const book = new Book("book1");
            const library = new Library([book]);
            const user = new User();

            //When
            user.borrow(book, library);

            //Then
            expect(library.getBooks()).toEqual([]);
            expect(user.books).toEqual([book]);
        })

        test('check if they have a book', () => {
            //Given
            const book = new Book("book1");
            const library = new Library([book]);
            const user = new User();
            user.borrow(book, library);

            //When
            const result = user.hasBook(book);

            //Then
            expect(result).toBe(true);
        })

        test("return a book", async () => {
            //Given
            const book = new Book("book1");
            const library = new Library([book]);
            const user = new User();
            user.borrow(book, library);

            //When
            user.return(book, library);

            //Then
            expect(library.getBooks()).toEqual([book]);
            expect(user.books).toEqual([]);
        })

        test('return the name of every book they have borrowed', () => {
            //Given
            const book1 = new Book("book1");
            const book2 = new Book("book2");
            const library = new Library([book1, book2]);
            const user = new User();
            user.borrow(book1, library);
            user.borrow(book2, library);

            //When
            const bookNames = user.getBookNames();

            //Then
            expect(bookNames).toEqual(["book1", "book2"]);
        })
    })

    describe('cannot', () => {
        test("return a book that they already returned", async () => {
            //Given
            const book = new Book("book1");
            const library = new Library([book]);
            const user = new User();

            //When
            user.borrow(book, library);
            user.return(book, library);
            const result = user.return(book, library);

            //Then
            expect(result).toBe(false);
        });
    })
})