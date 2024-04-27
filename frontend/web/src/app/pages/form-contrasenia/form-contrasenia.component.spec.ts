import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContraseniaComponent } from './form-contrasenia.component';

describe('FormContraseniaComponent', () => {
  let component: FormContraseniaComponent;
  let fixture: ComponentFixture<FormContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContraseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
