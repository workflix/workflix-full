import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsClientesComponent } from './charts-clientes.component';

describe('ChartsClientesComponent', () => {
  let component: ChartsClientesComponent;
  let fixture: ComponentFixture<ChartsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
