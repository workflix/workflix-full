import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  vista: 'profesionales' | 'servicios' = 'profesionales';
  cambiarVista(vista: 'profesionales' | 'servicios') {
    this.vista = vista;
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }

  userArray : any[] = [];
  serviceArray : any[] = [];

  nombre: string ="";
  apellido: string ="";
  direccion: string ="";
  correo: string="";
  telefono: number | undefined = undefined;
  currentUserId = "";

  constructor(private http: HttpClient, private router: Router, private userService: UserService, private serviceServices:ServiceService)
  {
    this.getAllUsers();
    this.getAllServices();
  }

  clearFieldsUser(){
    // Clear fields after successful saving
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
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

getAllServices(){
  this.serviceServices.getAllServices().subscribe((resultData: any)=>{
    console.log(resultData);
    this.serviceArray = resultData;
  })
}
// Pasar datos de un componente a otro
setUpdate(data: any){
  if (data) {
this.nombre  = data.nombre;
this.apellido = data.apellido;
this.correo = data.correo;
this.direccion = data.direccion;
this.telefono = data.telefono;

 this.currentUserId = data.id;
 this.router.navigate(['/dashboard/user-create'], { state: { data: data } });
}else {
  console.log('ERROR WHILE EDITING')
}
}

deleteUser(data: any){
  this.userService.deleteUser(data.id).subscribe((resultData: any)=>
  {
      this.getAllUsers();
      this.router.navigate(['/dashboard'])
  });

}

deleteService(data: any){}
}
