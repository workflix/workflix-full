import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components//footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { SiteComponent } from './pages/site/site.component';
import { NavbarSiteComponent } from './pages/site/navbar-site/navbar-site.component';
import { FooterSiteComponent } from './pages/site/footer-site/footer-site.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './components/carrito/carrito.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, HomeComponent, TarjetasComponent, RecuperarClaveComponent, TerminosComponent, RegistrarseComponent, SiteComponent, NavbarSiteComponent, FooterSiteComponent, CommonModule, CarritoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workflix';

  constructor(private router: Router) {}

  isSitePage(): boolean {

    return this.router.url.includes('site');
  }
  public openCart:boolean = false;

  public cart(){ //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }
}
