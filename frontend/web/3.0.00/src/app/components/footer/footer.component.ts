import { Component } from '@angular/core';
import { ContactoComponent } from '../../pages/contacto/contacto.component';
import { IngresarComponent} from '../../pages/ingresar/ingresar.component';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,ContactoComponent,IngresarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
