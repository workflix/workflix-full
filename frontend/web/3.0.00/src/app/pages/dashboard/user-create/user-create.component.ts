import { Component, ElementRef, ViewChild } from '@angular/core';
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
  alertMessage: string = '';
  alertType: string = '';
  nombre: string ="";
  apellido: string ="";
  direccion: string ="";
  correo: string ="";
  telefono: number | string = "" ;
  editingMode: number = 0;
  currentUserId = "";


  @ViewChild('nombreInput') nombreInput!: ElementRef;
  @ViewChild('apellidoInput') apellidoInput!: ElementRef;
  @ViewChild('correoInput') correoInput!: ElementRef;
  @ViewChild('claveInput') claveInput!: ElementRef;
  @ViewChild('telefonoInput') telefonoInput!: ElementRef;
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


 onSubmitUpdate(nombre: string, apellido: string, correo: string, telefono: string): void {
  if (nombre && apellido && correo && telefono) {
    const bodyData = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
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
    this.correo = userData.correo;
    this.direccion = userData.direccion;
    this.telefono = userData.telefono;
    this.currentUserId = userData.id;
    this.editingMode = 1;
  }else{
    console.log('ERROR RECEIVING DATA')
  }
}

validations(){
  if (!this.nombre || !this.apellido || !this.correo || !this.direccion || !this.telefono) {
    this.clearFieldsUser();
    return;
}

const phoneString = this.telefono.toString();

if (this.nombre.length < 2 || this.apellido.length < 2 || this.correo.length < 5 || this.direccion.length < 5 || phoneString.length < 10 ){

    this.clearFieldsUser();
    return;
}
  }

  mostrarMensajeExito() {
    alert("Usuario creado exitosamente");
  }
  clearFieldsUser(){
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.direccion = '';
    this.telefono = '';

    this.nombreInput.nativeElement.value = '';
    this.apellidoInput.nativeElement.value = '';
    this.correoInput.nativeElement.value = '';
    this.claveInput.nativeElement.value = '';
    this.telefonoInput.nativeElement.value = '';
 }
 showAlert(message: string, type: string): void {
  this.alertMessage = message;
  this.alertType = type;
}
}
