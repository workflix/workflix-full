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
    this.getAllUsers();
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
// Pasar datos de un componente a otro
setUpdate(data: any){
  if (data) {
this.nombre  = data.nombre;
this.apellido = data.apellido;
this.direccion = data.direccion;
this.telefono = data.telefono;

 this.currentUserId = data.id;
 this.router.navigate(['/dashboard/user-create'], { state: { data: data } });
}else {
  console.log('ERROR WHILE EDITING')
}
}
}
