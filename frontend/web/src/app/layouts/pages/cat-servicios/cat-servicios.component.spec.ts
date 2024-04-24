import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatServiciosComponent } from './cat-servicios.component';

describe('CatServiciosComponent', () => {
  let component: CatServiciosComponent;
  let fixture: ComponentFixture<CatServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
