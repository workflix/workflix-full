import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCargaComponent } from './servicio-carga.component';

describe('ServicioCargaComponent', () => {
  let component: ServicioCargaComponent;
  let fixture: ComponentFixture<ServicioCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioCargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
