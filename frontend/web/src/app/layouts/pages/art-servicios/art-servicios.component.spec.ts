import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtServiciosComponent } from './art-servicios.component';

describe('ArtServiciosComponent', () => {
  let component: ArtServiciosComponent;
  let fixture: ComponentFixture<ArtServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
