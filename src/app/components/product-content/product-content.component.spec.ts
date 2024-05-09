import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContentComponent } from './product-content.component';

describe('ProductContentComponent', () => {
  let component: ProductContentComponent;
  let fixture: ComponentFixture<ProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
