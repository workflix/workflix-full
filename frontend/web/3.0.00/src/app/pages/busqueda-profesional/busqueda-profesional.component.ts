import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { User } from '../../models/user';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-busqueda-profesional',
  standalone: true,
  imports: [TarjetasComponent, NavBarComponent],
  templateUrl: './busqueda-profesional.component.html',
  styleUrl: './busqueda-profesional.component.css'
})
export class BusquedaProfesionalComponent {

  title: string = "List the users";
  test: string = "This is a test";
  users: User[] = [];
  
  constructor( private route: ActivatedRoute,
              public userService: UserService
  ){}

  ngOnInit (): void {
    this.userService.getAllUsers().subscribe( //guarda los usuarios en la variable users
      users => this.users = users
    );

    this.route.params
    .subscribe (params => {
      console.log(params['termino']); // para obtener el parámentro de la URL término
      this.userService.buscarProfesional(params['termino'])
    });
  }

  trackById(index: number, user: User): number {
    return user.id;
  }

}
