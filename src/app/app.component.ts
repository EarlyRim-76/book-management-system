import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookInventoryManagementComponent } from './features/book-inventory-management/book-inventory-management.component';

@Component({
  selector: 'app-root',
  imports: [BookInventoryManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-management-system';
}
