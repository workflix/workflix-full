import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadosComponent } from './destacados.component';

describe('DestacadosComponent', () => {
  let component: DestacadosComponent;
  let fixture: ComponentFixture<DestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestacadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
