import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionPerfilComponent } from './valoracion-perfil.component';

describe('ValoracionPerfilComponent', () => {
  let component: ValoracionPerfilComponent;
  let fixture: ComponentFixture<ValoracionPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoracionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
