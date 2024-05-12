import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-valoracion-perfil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './valoracion-perfil.component.html',
  styleUrl: './valoracion-perfil.component.css'
})
export class ValoracionPerfilComponent {

  constructor (private router:Router) {}

  btnVolver(){
    this.router.navigate(['/home']);
  }
}
