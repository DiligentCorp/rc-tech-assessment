import {User} from "../sealed/user";
import {Book} from "../sealed/book";
import {Library} from "../sealed/library";


export class UserImplementation implements User {
    borrow(book: Book, library: Library): boolean {
        throw new Error("Method not implemented.");
    }

    return(book: Book, library: Library) {
        throw new Error("Method not implemented.");
    }

    getBooks(): Book[] {
        throw new Error("Method not implemented.");
    }
}