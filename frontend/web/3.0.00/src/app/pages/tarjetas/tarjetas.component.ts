import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


import { RouterModule } from '@angular/router';
import { ValoracionPerfilComponent } from '../valoracion-perfil/valoracion-perfil.component';


@Component({
  selector: 'app-tarjetas',
  standalone:true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  imports: [RouterModule, ValoracionPerfilComponent]
})
export class TarjetasComponent implements OnInit {  
  title: string = "List the users";
  test: string = "This is a test";

  trackById(index: number, user: User): number {
    return user.id;
  }
  
  users: User[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => this.users = users
    );
  }
}
