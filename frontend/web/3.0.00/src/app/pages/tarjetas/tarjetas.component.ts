import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ValoracionPerfilComponent } from '../valoracion-perfil/valoracion-perfil.component';


@Component({
  selector: 'app-tarjetas',
  standalone:true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  imports: [NavBarComponent, RouterModule, ValoracionPerfilComponent]
})
export class TarjetasComponent implements OnInit {
  title: string = "List the users";
  test: string = "This is a test";

  trackById(index: number, user: User): number {
    return user.id;
  }

  users: User[] = [];

  constructor(private userService: UserService,
              private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => this.users = users
    );
  }
  public addCart(users: User)
  {
  }
}


