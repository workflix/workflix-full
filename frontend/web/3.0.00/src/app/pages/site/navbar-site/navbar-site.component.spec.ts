import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSiteComponent } from './navbar-site.component';

describe('NavbarSiteComponent', () => {
  let component: NavbarSiteComponent;
  let fixture: ComponentFixture<NavbarSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
