import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  userArray : any[] = [];
  error: string = '';

  nombre: string ="";
  apellido: string ="";
  direccion: string ="";
  telefono: number | string = "" ;
  editingMode: number = 0;
  currentUserId = "";

  constructor(private http: HttpClient, private router: Router, private registerService: RegisterService, private userService: UserService)
  {
  }

  onSubmit(nombre: string, apellido: string, correo: string, clave: string, telefono: string): void  {
    if(nombre && apellido && correo && clave && telefono){
     this.registerService.registerUser(nombre, apellido, correo, clave, telefono)
     .subscribe(
       response => {
         console.log('Registro exitoso:', response);
      this.clearFieldsUser();
      this.router.navigate(['/dashboard'])

       },
       error => {
         console.error(error);
         console.log('No se pudo registrar correctamente: ' + error);
       }
     );
    }else{
     this.error = 'Debe completar todos los campos';
    }
 }


}
