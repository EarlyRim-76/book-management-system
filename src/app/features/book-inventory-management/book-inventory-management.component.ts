import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BookManagementHeaderComponent } from '../../layouts/book-management-header/book-management-header.component';
import { BooksDataService } from '../../core/services/books.data.service';
import { Book } from '../../core/models/book.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-book-inventory-management',
  imports: [BookManagementHeaderComponent, MatDialogModule, MatIconModule],
  templateUrl: './book-inventory-management.component.html',
  styleUrl: './book-inventory-management.component.scss'
})
export class BookInventoryManagementComponent implements OnInit{

  //use this to implement material embeded modal
  //using ng-template
  dialogRef : MatDialogRef<any>;
  dialog  = inject(MatDialog);
  bookDataService = inject(BooksDataService);


  books: Book[] = []
  
    ngOnInit(): void {
      this.books = this.bookDataService.getBooks();
    }
    
    viewBook(book:Book){

    }
    
}
