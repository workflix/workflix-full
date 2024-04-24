import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsTraficoSitioComponent } from './charts-trafico-sitio.component';

describe('ChartsTraficoSitioComponent', () => {
  let component: ChartsTraficoSitioComponent;
  let fixture: ComponentFixture<ChartsTraficoSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsTraficoSitioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsTraficoSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
