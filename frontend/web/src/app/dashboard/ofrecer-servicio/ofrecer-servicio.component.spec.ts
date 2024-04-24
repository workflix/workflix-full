import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecerServicioComponent } from './ofrecer-servicio.component';

describe('OfrecerServicioComponent', () => {
  let component: OfrecerServicioComponent;
  let fixture: ComponentFixture<OfrecerServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfrecerServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfrecerServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
