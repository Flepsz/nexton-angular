import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterQuantityComponent } from './counter-quantity.component';

describe('CounterQuantityComponent', () => {
  let component: CounterQuantityComponent;
  let fixture: ComponentFixture<CounterQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterQuantityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
