import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreguntasFrecuentesComponent } from '../../preguntas-frecuentes/preguntas-frecuentes.component';

@Component({
  selector: 'app-navbar-site',
  standalone: true,
  imports: [RouterModule, PreguntasFrecuentesComponent],
  templateUrl: './navbar-site.component.html',
  styleUrl: './navbar-site.component.css'
})
export class NavbarSiteComponent {

}
