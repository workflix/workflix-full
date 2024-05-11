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
 } onSubmitUpdate(nombre: string, apellido: string, telefono: string): void {
  if (nombre && apellido && telefono) {
    const bodyData = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono
    };

    this.userService.updateUser(+this.currentUserId, bodyData).subscribe(
      response => {
        console.log('Actualizacion exitosa:', response);
        this.clearFieldsUser();
        this.router.navigate(['/dashboard']);

      },
      error => {
        console.error('No se pudo actualizar correctamente:', error);
      }
    );
  } else {
    this.error = 'Debe completar todos los campos';
  }
}

ngOnInit() {
  const userData = history.state.data;
  if(userData){
    this.nombre = userData.nombre;
    this.apellido = userData.apellido;
    this.direccion = userData.direccion;
    this.telefono = userData.telefono;
    this.currentUserId = userData.id;
    this.editingMode = 1;
  }else{
    console.log('ERROR RECEIVING DATA')
  }
}

validations(){
  if (!this.nombre || !this.apellido || !this.direccion || !this.telefono) {
    this.clearFieldsUser();
    return;
}

const phoneString = this.telefono.toString();

if (this.nombre.length < 2 || this.apellido.length < 2 || this.direccion.length < 5 || phoneString.length < 10 ){

    this.clearFieldsUser();
    return;
}
  }

  clearFieldsUser(){
    this.nombre = '';
    this.apellido = '';
    this.direccion = '';
    this.telefono = '';
 }

}
