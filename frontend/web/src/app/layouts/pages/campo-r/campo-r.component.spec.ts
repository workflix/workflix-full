import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoRComponent } from './campo-r.component';

describe('CampoRComponent', () => {
  let component: CampoRComponent;
  let fixture: ComponentFixture<CampoRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
