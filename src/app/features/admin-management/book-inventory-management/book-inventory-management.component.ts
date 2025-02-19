import { ChangeDetectorRef, Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BookManagementHeaderComponent } from '../../../layouts/book-management-header/book-management-header.component';
import { BooksDataService } from '../../../core/services/books.data.service';
import { Book } from '../../../core/models/book.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBook } from '../../../core/interfaces/book.interface';
import { Route } from '@angular/router';




@Component({
  selector: 'app-book-inventory-management',
  imports: [ MatDialogModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './book-inventory-management.component.html',
  styleUrl: './book-inventory-management.component.scss'
})
export class BookInventoryManagementComponent implements OnInit{

  //use this to implement material embeded modal
  //using ng-template
  dialogRef : MatDialogRef<any>;
  dialog  = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef)
  private bookDataService = inject(BooksDataService);
  index : number;
  bookTitle = new FormControl('');

  //Pagination 
  rowsPerPage = 5;
  currentPage = 1;
  books: Book[] = [];
  getAllBooks: Book[] = [];

  bookForm = new FormGroup({
    title : new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    ibsn: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    stockQuantity: new FormControl(0, Validators.required)

  })
  
    ngOnInit(): void {
      this.getAllBooks = this.bookDataService.getBooks(); 
      console.log(this.getAllBooks)
      this.populateTable()
    }

    populateTable(){
      const start = (this.currentPage - 1) * this.rowsPerPage;
      this.books = this.getAllBooks.slice(start, start + this.rowsPerPage);
    }

    searchBook(){ 
      this.books = this.bookDataService.getBooksByTitle(this.bookTitle.value);
    }

    resetForm(){
      this.bookForm.reset();
    }

    previousPage(){
      this.currentPage--;
      this.populateTable();
    }

    nextPage(){
      this.currentPage++;
      this.populateTable();
    }


    addNewBook(){
      let newBook : IBook = {
        bookId : this.getAllBooks.length + 1,
        title: this.bookForm.controls.title.value,
        author: this.bookForm.controls.author.value,
        genre: this.bookForm.controls.genre.value,
        ibsn: this.bookForm.controls.ibsn.value,
        price: this.bookForm.controls.price.value,
        stockQuantity: this.bookForm.controls.stockQuantity.value,
      }
      this.books.push(newBook);
    }

    editBook(book: Book , index :number){
      this.index = book.bookId;
      this.bookForm.setValue({
        title: book.title,
        author:book.author,
        genre: book.genre,
        ibsn: book.ibsn,
        price: book.price,
        stockQuantity: book.stockQuantity
      })
    }

    updateBooks(){
      const bookData =  this.bookDataService.getBookById(this.index);
      if(bookData){
        bookData.title = this.bookForm.controls.title.value;
        bookData.author = this.bookForm.controls.author.value;
        bookData.genre = this.bookForm.controls.genre.value;
        bookData.ibsn = this.bookForm.controls.ibsn.value;
        bookData.price = this.bookForm.controls.price.value;
        bookData.stockQuantity = this.bookForm.controls.stockQuantity.value;
      }
    }
}
