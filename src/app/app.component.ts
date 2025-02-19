import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookManagementHeaderComponent } from './layouts/book-management-header/book-management-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookManagementHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-management-system';
}
