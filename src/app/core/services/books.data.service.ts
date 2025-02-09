import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";

@Injectable({providedIn:'root'})
export class BooksDataService {

  private books : Book[] = [
    new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', '9780743273565', 10.99, 25),
    new Book(2, 'To Kill a Mockingbird', 'Harper Lee', 'Classic', '9780061120084', 8.99, 30),
    new Book(3, '1984', 'George Orwell', 'Dystopian', '9780451524935', 12.99, 20),
    new Book(4, 'Pride and Prejudice', 'Jane Austen', 'Romance', '9780141439518', 9.99, 15),
    new Book(5, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '9780345339683', 14.99, 18),
    new Book(6, 'Harry Potter and the Sorcerer’s Stone', 'J.K. Rowling', 'Fantasy', '9780590353427', 19.99, 40),
    new Book(7, 'The Catcher in the Rye', 'J.D. Salinger', 'Fiction', '9780316769488', 10.49, 22),
    new Book(8, 'The Da Vinci Code', 'Dan Brown', 'Thriller', '9780307474278', 11.99, 28),
    new Book(9, 'The Alchemist', 'Paulo Coelho', 'Philosophical', '9780062315007', 13.99, 35),
    new Book(10, 'Brave New World', 'Aldous Huxley', 'Dystopian', '9780060850524', 10.99, 17),
  ]

  getBooks(): Book[]{
    return this.books;
  }

  getBookById(bookId: number): Book | undefined {
    return this.books.find(x => x.bookId === bookId);
  }

  addBook(book: Book) : void{
    this.books.push(book)
  }

  deleteBook(bookId:number): void{
    this.books.splice(bookId, 1);
  }
}
