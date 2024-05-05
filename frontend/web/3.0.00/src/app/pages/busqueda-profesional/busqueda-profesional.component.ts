import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-busqueda-profesional',
  standalone: true,
  imports: [TarjetasComponent],
  templateUrl: './busqueda-profesional.component.html',
  styleUrl: './busqueda-profesional.component.css'
})
export class BusquedaProfesionalComponent {
  users: User[] = [];
  usuariosFiltrados: User[] = [];

  constructor( private route: ActivatedRoute,
              public userService: UserService
  ){}

  ngOnInit (): void {
    this.userService.getAllUsers().subscribe( //guarda los usuarios en la variable users
      users => this.users = users
    );
  }

}
