import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export const BOOKROUTES = [
  {
    route:'book-management',
    name:'Book Management'
  },
  {
    route:'customer-management',
    name:'Customer Management'
  },
  {
    route:'order-management',
    name:'Order Management'
  },
  {
    route:'reporting',
    name:'Reporting'
  },
  {
    route:'review-system',
    name:'Review System'
  },
]

@Component({
  selector: 'app-book-management-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './book-management-header.component.html',
  styleUrl: './book-management-header.component.scss'
})
export class BookManagementHeaderComponent {
  bookRoutes = BOOKROUTES;
}
