import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsInformeRadarComponent } from './charts-informe-radar.component';

describe('ChartsInformeRadarComponent', () => {
  let component: ChartsInformeRadarComponent;
  let fixture: ComponentFixture<ChartsInformeRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsInformeRadarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsInformeRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
