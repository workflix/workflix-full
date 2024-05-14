import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirirServicioComponent } from './adquirir-servicio.component';

describe('AdquirirServicioComponent', () => {
  let component: AdquirirServicioComponent;
  let fixture: ComponentFixture<AdquirirServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquirirServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdquirirServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
