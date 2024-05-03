import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components//footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, HomeComponent, TarjetasComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workflix';
}