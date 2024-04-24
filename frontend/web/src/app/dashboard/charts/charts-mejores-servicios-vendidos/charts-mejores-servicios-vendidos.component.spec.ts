import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMejoresServiciosVendidosComponent } from './charts-mejores-servicios-vendidos.component';

describe('ChartsMejoresServiciosVendidosComponent', () => {
  let component: ChartsMejoresServiciosVendidosComponent;
  let fixture: ComponentFixture<ChartsMejoresServiciosVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsMejoresServiciosVendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsMejoresServiciosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
