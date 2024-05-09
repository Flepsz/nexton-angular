import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBicolorComponent } from './title-bicolor.component';

describe('TitleBicolorComponent', () => {
  let component: TitleBicolorComponent;
  let fixture: ComponentFixture<TitleBicolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBicolorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleBicolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
