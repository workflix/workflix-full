import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDisponiblesComponent } from './servicios-disponibles.component';

describe('ServiciosDisponiblesComponent', () => {
  let component: ServiciosDisponiblesComponent;
  let fixture: ComponentFixture<ServiciosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
