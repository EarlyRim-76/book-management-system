import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSystemComponent } from './review-system.component';

describe('ReviewSystemComponent', () => {
  let component: ReviewSystemComponent;
  let fixture: ComponentFixture<ReviewSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
