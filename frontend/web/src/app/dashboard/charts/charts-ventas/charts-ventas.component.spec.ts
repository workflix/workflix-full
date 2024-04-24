import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsVentasComponent } from './charts-ventas.component';

describe('ChartsVentasComponent', () => {
  let component: ChartsVentasComponent;
  let fixture: ComponentFixture<ChartsVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
