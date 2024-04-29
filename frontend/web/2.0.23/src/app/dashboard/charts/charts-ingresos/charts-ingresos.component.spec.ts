import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsIngresosComponent } from './charts-ingresos.component';

describe('ChartsIngresosComponent', () => {
  let component: ChartsIngresosComponent;
  let fixture: ComponentFixture<ChartsIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsIngresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
