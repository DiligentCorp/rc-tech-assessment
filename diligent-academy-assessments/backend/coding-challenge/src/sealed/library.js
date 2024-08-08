export class Library {
    constructor(books) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b !== book);
    }

    getBooks() {
        return this.books;
    }
}