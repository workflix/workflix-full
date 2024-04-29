import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsIngresosComponent } from './admin-charts-ingresos.component';

describe('AdminChartsIngresosComponent', () => {
  let component: AdminChartsIngresosComponent;
  let fixture: ComponentFixture<AdminChartsIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsIngresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChartsIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
