import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuienesSomosComponent } from '../../quienes-somos/quienes-somos.component';
import { ContactoComponent } from '../../contacto/contacto.component';
import { HomeComponent } from '../../home/home.component';
import { PreguntasFrecuentesComponent } from '../../preguntas-frecuentes/preguntas-frecuentes.component';

@Component({
  selector: 'app-footer-site',
  standalone: true,
  imports: [RouterModule, QuienesSomosComponent, ContactoComponent, HomeComponent, PreguntasFrecuentesComponent],
  templateUrl: './footer-site.component.html',
  styleUrl: './footer-site.component.css'
})
export class FooterSiteComponent {

}
