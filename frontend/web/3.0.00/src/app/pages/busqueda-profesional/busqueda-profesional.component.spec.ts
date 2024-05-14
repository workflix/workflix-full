import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaProfesionalComponent } from './busqueda-profesional.component';

describe('BusquedaProfesionalComponent', () => {
  let component: BusquedaProfesionalComponent;
  let fixture: ComponentFixture<BusquedaProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaProfesionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
