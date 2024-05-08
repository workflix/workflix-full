import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSiteComponent } from './footer-site.component';

describe('FooterSiteComponent', () => {
  let component: FooterSiteComponent;
  let fixture: ComponentFixture<FooterSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
