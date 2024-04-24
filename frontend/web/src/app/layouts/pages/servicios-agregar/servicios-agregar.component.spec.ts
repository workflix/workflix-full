import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAgregarComponent } from './servicios-agregar.component';

describe('ServiciosAgregarComponent', () => {
  let component: ServiciosAgregarComponent;
  let fixture: ComponentFixture<ServiciosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
