import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components//footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, HomeComponent, TarjetasComponent, RecuperarClaveComponent, TerminosComponent, RegistrarseComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workflix';
}