import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarClaveComponent } from './recuperar-clave.component';

describe('RecuperarClaveComponent', () => {
  let component: RecuperarClaveComponent;
  let fixture: ComponentFixture<RecuperarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarClaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
