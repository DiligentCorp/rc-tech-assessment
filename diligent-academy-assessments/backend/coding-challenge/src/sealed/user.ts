import {Book} from "./book";
import {Library} from "./library";

export interface User {
    borrow(book: Book, library: Library): boolean;

    return(book: Book, library: Library): void;

    getBooks(): Book[];
}