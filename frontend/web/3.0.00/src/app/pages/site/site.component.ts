import { Component } from '@angular/core';
import { NavbarSiteComponent } from './navbar-site/navbar-site.component';
import { FooterSiteComponent } from './footer-site/footer-site.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [NavbarSiteComponent, FooterSiteComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

}
