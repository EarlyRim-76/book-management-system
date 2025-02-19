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
    new Book(11, 'Moby Dick','Herman Melville','Adventure', '9781503280786', 15.49, 12 ),
    new Book(12, 'War and Peace','Leo Tolstoy','Historical', '9781400079988', 18.99, 10 ),
    new Book(13, 'Crime and Punishment','Fyodor Dostoevsky','Classic', '9780486415871', 11.99, 20 ),
    new Book(14, 'The Lord of the Rings','J.R.R. Tolkien', 'Fantasy', '9780544003415', 25.99, 30 ),
    new Book(15, 'The Shining','Stephen King','Horror', '9780307743657', 13.49, 18 ),
    new Book(16, 'Dracula', 'Bram Stoker','Gothic Horror', '9780486411095', 9.99, 14 ),
    new Book(17, 'Frankenstein', 'Mary Shelley','Gothic Horror', '9780486282114', 8.99, 22 ),
    new Book(18, 'The Hitchhiker’s Guide to the Galaxy', 'Douglas Adams','Sci-Fi','9780345391803', 12.99, 25 ),
    new Book(19, 'A Game of Thrones', 'George R.R. Martin','Fantasy', '9780553573404', 14.99, 35 ),
    new Book(20, 'Fahrenheit 451', 'Ray Bradbury','Dystopian', '9781451673319', 10.99, 20 ),
    new Book(21, 'The Road', 'Cormac McCarthy','Post-Apocalyptic', '9780307387899', 13.99, 16 ),
    new Book(22, 'Dune','Frank Herbert','Sci-Fi', '9780441013593', 18.99, 28 ),
    new Book(23, 'The Name of the Wind','Patrick Rothfuss', 'Fantasy','9780756404741', 17.99, 24 ),
    new Book(24, 'American Gods','Neil Gaiman','Fantasy', '9780062572233', 14.99, 19 ),
    new Book(25, 'Good Omens','Neil Gaiman & Terry Pratchett', 'Comedy/Fantasy','9780060853983',13.49, 21 ),
    new Book(26, 'The Stand','Stephen King','Horror', '9780307947307', 19.99, 14 ),
    new Book(27, 'The Wind-Up Bird Chronicle','Haruki Murakami','Magical Realism', '9780679775430', 15.49, 12 ),
    new Book(28, 'The Shadow of the Wind','Carlos Ruiz Zafón','Historical Mystery', '9780143034902', 11.99, 20 ),
    new Book(29, 'Shōgun','James Clavell','Historical Fiction', '9780440178002', 14.99, 15 ),
    new Book(30, 'The Midnight Library','Matt Haig','Contemporary Fiction', '9780525559474', 12.99, 25 )
  ]

  getBooks(): Book[]{
    return this.books;
  }

  getBookById(bookId: number): Book | undefined {
    return this.books.find(x => x.bookId === bookId);
  }
  
  getBookByName(bookTitle: string) : Book | undefined {
    return this.books.find(book => book.title === bookTitle);
  }

  getBooksByTitle(bookTItle: string) : Book[] | undefined {
    return this.books.filter(book => book.title.includes(bookTItle))
  }

  addBook(book: Book) : void{
    this.books.push(book)
  }
  

  deleteBook(bookId:number): void{
    this.books.splice(bookId, 1);
  }
}
