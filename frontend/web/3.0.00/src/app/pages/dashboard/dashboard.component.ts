import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userArray : any[] = [];

  nombre: string ="";
  apellido: string ="";
  direccion: string ="";
  telefono: number | undefined = undefined;
  currentUserId = "";

  constructor(private http: HttpClient, private router: Router, private userService: UserService)
  {


  }

  clearFieldsUser(){
    // Clear fields after successful saving
    this.nombre = '';
    this.apellido = '';
    this.direccion = '';
    this.telefono = undefined;
 }
 getAllUsers(){
  this.userService.getAllUsers()
  .subscribe((resultData: any)=>
  {
      console.log(resultData);
      this.userArray = resultData;
  });
}
}
