import { Component } from '@angular/core';
import { ContactoComponent } from '../../pages/contacto/contacto.component';
import { IngresarComponent} from '../../pages/ingresar/ingresar.component';
import { RouterModule } from '@angular/router';
import { RegistrarseComponent } from '../../pages/registrarse/registrarse.component'
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,ContactoComponent,IngresarComponent,RegistrarseComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  

}
