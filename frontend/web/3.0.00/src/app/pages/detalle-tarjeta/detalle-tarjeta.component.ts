import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-detalle-tarjeta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-tarjeta.component.html',
  styleUrl: './detalle-tarjeta.component.css'
})
export class DetalleTarjeta {
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
