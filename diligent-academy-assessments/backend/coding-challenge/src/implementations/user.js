export class User {
    constructor() {
        this.books = [];
    }

    borrow(book, library) {
        const bookToBorrow = library.getBooks().filter(b => b == book)[0];
        library.removeBook(book);
        this.books.push(bookToBorrow);
    }

    hasBook(book) {
        return this.books.includes(book);
    }

    return(book, library) {
        if (this.hasBook(book)) {
            this.books = this.books.filter(b => b != book);
            library.addBook(book);
            return true;
        }
        return false;
    }

    getBookNames() {
        const bookNames = [];
        this.books.map(b => bookNames.push(b.name));
        return bookNames;
    }
}