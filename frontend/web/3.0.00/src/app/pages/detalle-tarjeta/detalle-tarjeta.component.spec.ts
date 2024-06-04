import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTarjeta } from './detalle-tarjeta.component';

describe('DetalleTarjetaComponent', () => {
  let component: DetalleTarjeta;
  let fixture: ComponentFixture<DetalleTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTarjeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
