import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarComponent } from './ingresar.component';

describe('IngresarComponent', () => {
  let component: IngresarComponent;
  let fixture: ComponentFixture<IngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
