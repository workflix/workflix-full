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
export class ValoracionPerfilComponent {
  title: string = "List the users";
  test: string = "This is a test";

  trackById(index: number, user: User): number {
    return user.id;
  }

  users: User[] = [];

  constructor (private router:Router,
    private userService: UserService
) {}

  ngOnInit(): void {
  this.userService.getAllUsers().subscribe(
    users => this.users = users
  );
}

  btnVolver(){
    this.router.navigate(['/home']);
  }

}
