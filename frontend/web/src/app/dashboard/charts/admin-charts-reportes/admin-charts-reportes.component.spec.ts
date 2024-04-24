import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsReportesComponent } from './admin-charts-reportes.component';

describe('AdminChartsReportesComponent', () => {
  let component: AdminChartsReportesComponent;
  let fixture: ComponentFixture<AdminChartsReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChartsReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
