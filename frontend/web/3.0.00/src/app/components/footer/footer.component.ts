import { Component } from '@angular/core';
import { ContactoComponent } from '../../pages/contacto/contacto.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
