import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfesionalesClientesComponent } from './formulario-profesionales-clientes.component';

describe('FormularioProfesionalesClientesComponent', () => {
  let component: FormularioProfesionalesClientesComponent;
  let fixture: ComponentFixture<FormularioProfesionalesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProfesionalesClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProfesionalesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
