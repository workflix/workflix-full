import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCatComponent } from './servicios-cat.component';

describe('ServiciosCatComponent', () => {
  let component: ServiciosCatComponent;
  let fixture: ComponentFixture<ServiciosCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
