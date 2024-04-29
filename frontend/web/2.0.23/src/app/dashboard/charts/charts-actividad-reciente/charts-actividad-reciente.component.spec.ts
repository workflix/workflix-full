import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsActividadRecienteComponent } from './charts-actividad-reciente.component';

describe('ChartsActividadRecienteComponent', () => {
  let component: ChartsActividadRecienteComponent;
  let fixture: ComponentFixture<ChartsActividadRecienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsActividadRecienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsActividadRecienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
