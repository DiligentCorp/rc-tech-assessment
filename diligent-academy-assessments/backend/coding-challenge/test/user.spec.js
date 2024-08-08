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
            const result = user.borrow(book, library);

            //Then
            expect(result).toBe(true);
            expect(library.getBooks()).toEqual([]);
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
            expect(user.getBooks()).toEqual([]);
        })
    })

    describe('cannot', () => {
        test("borrow a book that is already borrowed", async () => {
            //Given
            const book = new Book("book1");
            const library = new Library([book]);
            const user1 = new User();
            const user2 = new User();

            //When
            user1.borrow(book, library);
            const result = user2.borrow(book, library);

            //Then
            expect(result).toBe(false);
            expect(user1.getBooks()).toEqual([book]);
            expect(library.getBooks()).toEqual([]);
            expect(user2.getBooks()).toEqual([]);
        });
    })
})




