import { Component } from '@angular/core';
import { NavbarSiteComponent } from './navbar-site/navbar-site.component';
import { FooterSiteComponent } from './footer-site/footer-site.component';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [RouterModule, NavbarSiteComponent, FooterSiteComponent, QuienesSomosComponent, HomeComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

}
