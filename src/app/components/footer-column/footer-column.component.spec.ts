import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnComponent } from './footer-column.component';

describe('FooterColumnComponent', () => {
  let component: FooterColumnComponent;
  let fixture: ComponentFixture<FooterColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
