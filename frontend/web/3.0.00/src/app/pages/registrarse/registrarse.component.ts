import { HttpStatusCode } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/*
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { TipoUsuario } from 'src/app/models/modelo.usuario';*/
import { RegisterService } from '../../services/register.service';
import { UserService} from '../../services/user.service' ;
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
  providers: [RegisterService, UserService]
})
export class RegistrarseComponent {
  error: string = '';
  registrarForm!: FormGroup
  usuarios = { fname: '', lname: '', mail: '', password: '', phone: '' }

  /* @Input() resultado: ResultadoApi;*/

  constructor(private fb: FormBuilder,  private registerService: RegisterService,  private router: Router) {
    /* this.resultado = {
      mensaje: "",
      data: {},
      status: 0 as HttpStatusCode
    } */
  }

  ngOnInit(): void {
    this.registrarForm = this.fb.group({
      fname: [this.usuarios.fname, [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lname: [this.usuarios.lname, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      mail: [this.usuarios.mail, [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[^,;\s]+(?:.[a-zA-Z0-9-]+)$"), Validators.maxLength(45)]],
/*       adress: [this.usuarios.adress, [Validators.required, Validators.maxLength(40)]],*/
/*       user: [this.usuarios.user, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]], */
      password: [this.usuarios.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      phone: [this.usuarios.phone, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    });
  }

  get fname() { return this.registrarForm.get('fname'); }
  get lname() { return this.registrarForm.get('lname'); }
  get mail() { return this.registrarForm.get('mail'); }
/*   get adress() { return this.registrarForm.get('adress'); }
  get user() { return this.registrarForm.get('user'); } */
  get password() { return this.registrarForm.get('password'); }
  get phone() { return this.registrarForm.get('phone'); }

  onSubmit() {
    if (this.registrarForm.valid) {
      const formData = this.registrarForm.value;
      const {fname, lname, mail, password, phone} = formData
     /*  const newUser = new User(
        0, 
        formData.fname,
        formData.lname,
        formData.mail,
        formData.phone, 
        formData.password,
        formData.adress, 
        '', // ciudad
        '', // provincia
        '', // descripcion
        '' // foto
      ); */
  
      this.registerService.registerUser(fname, lname, mail, password, phone)
        .subscribe({
          next: (exito: User) => {
            
            console.log('Usuario creado:', exito);
            
            this.router.navigate(['/ingresar']);
          },
          error: (error: any) => {
            
            console.error('Error al crear usuario:', error);
            console.log('No se pudo registrar correctamente: ' + error);
          }
        });
      }else{
        this.error = 'Debe completar todos los campos';
      }
    }
  }
  
  
    
    
  /* 
    onSubmit(nombre: string, apellido: string, correo: string, clave: string, telefono: string): void  {
     if(nombre && apellido && correo && clave && telefono){
      this.registerService.registerUser(nombre, apellido, correo, clave, telefono)
      .subscribe(
        response => {
          // Manejar la respuesta exitosa aquí
          console.log('Registro exitoso:', response);
        },
        error => {
          // Manejar el error aquí
          console.error(error);
          console.log('No se pudo registrar correctamente: ' + error);
        }
      );
     }else{
      this.error = 'Debe completar todos los campos';
     }
  }
  } */
  



