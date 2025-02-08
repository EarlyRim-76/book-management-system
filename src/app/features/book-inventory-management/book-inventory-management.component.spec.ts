import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInventoryManagementComponent } from './book-inventory-management.component';

describe('BookInventoryManagementComponent', () => {
  let component: BookInventoryManagementComponent;
  let fixture: ComponentFixture<BookInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookInventoryManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
