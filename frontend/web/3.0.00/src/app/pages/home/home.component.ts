import { Component } from '@angular/core';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[TarjetasComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {  }
}
