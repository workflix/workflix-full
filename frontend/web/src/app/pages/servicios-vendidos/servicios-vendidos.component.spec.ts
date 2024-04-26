import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVendidosComponent } from './servicios-vendidos.component';

describe('ServiciosVendidosComponent', () => {
  let component: ServiciosVendidosComponent;
  let fixture: ComponentFixture<ServiciosVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosVendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
