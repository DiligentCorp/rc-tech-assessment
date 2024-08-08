import {Book} from "./book";

export class Library {
    books: Book[];

    constructor(books: Book[]) {
        this.books = books;
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    removeBook(book: Book) {
        this.books = this.books.filter(b => b !== book);
    }

    getBooks() {
        return this.books;
    }
}