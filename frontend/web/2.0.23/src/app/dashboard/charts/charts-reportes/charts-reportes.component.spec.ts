import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsReportesComponent } from './charts-reportes.component';

describe('ChartsReportesComponent', () => {
  let component: ChartsReportesComponent;
  let fixture: ComponentFixture<ChartsReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
