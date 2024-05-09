import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBtnComponent } from './cart-btn.component';

describe('CartBtnComponent', () => {
  let component: CartBtnComponent;
  let fixture: ComponentFixture<CartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
