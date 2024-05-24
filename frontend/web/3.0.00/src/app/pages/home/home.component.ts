import { Component } from '@angular/core';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { DestacadosComponent } from '../destacados/destacados.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[TarjetasComponent, DestacadosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {  }
}
