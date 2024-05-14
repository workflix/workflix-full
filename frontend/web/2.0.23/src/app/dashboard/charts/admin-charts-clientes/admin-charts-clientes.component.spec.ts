import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsClientesComponent } from './admin-charts-clientes.component';

describe('AdminChartsClientesComponent', () => {
  let component: AdminChartsClientesComponent;
  let fixture: ComponentFixture<AdminChartsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChartsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
