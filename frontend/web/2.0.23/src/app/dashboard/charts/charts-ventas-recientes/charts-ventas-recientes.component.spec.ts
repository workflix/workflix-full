import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsVentasRecientesComponent } from './charts-ventas-recientes.component';

describe('ChartsVentasRecientesComponent', () => {
  let component: ChartsVentasRecientesComponent;
  let fixture: ComponentFixture<ChartsVentasRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsVentasRecientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsVentasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
