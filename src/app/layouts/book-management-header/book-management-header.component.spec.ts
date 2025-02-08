import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagementHeaderComponent } from './book-management-header.component';

describe('BookManagementHeaderComponent', () => {
  let component: BookManagementHeaderComponent;
  let fixture: ComponentFixture<BookManagementHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookManagementHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookManagementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
