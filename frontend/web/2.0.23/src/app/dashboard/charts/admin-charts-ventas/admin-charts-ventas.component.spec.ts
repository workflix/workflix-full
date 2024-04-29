import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsVentasComponent } from './admin-charts-ventas.component';

describe('AdminChartsVentasComponent', () => {
  let component: AdminChartsVentasComponent;
  let fixture: ComponentFixture<AdminChartsVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChartsVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
