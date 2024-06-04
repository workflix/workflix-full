import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClaveComponent } from './cambiar-clave.component';

describe('CambiarClaveComponent', () => {
  let component: CambiarClaveComponent;
  let fixture: ComponentFixture<CambiarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarClaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambiarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
