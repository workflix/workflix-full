import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-valoracion-perfil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './valoracion-perfil.component.html',
  styleUrl: './valoracion-perfil.component.css'
})
export class ValoracionPerfilComponent{

  constructor (private router:Router,
              private userService: UserService
  ) {}

  btnVolver(){
    this.router.navigate(['/home']);
  }

}
