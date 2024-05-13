import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { response } from 'express';

@Component({
  selector: 'app-perfil-profesional',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './perfil-profesional.component.html',
  styleUrl: './perfil-profesional.component.css'
})

export class PerfilProfesionalComponent implements OnInit {
  currentUser: any;
  perfilForm: FormGroup;
  usuario?: User;
  error: string = '';
  currentUserId = "";


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.usuario = {} as User;
    this.perfilForm = this.formBuilder.group({
      mail: ["", [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      adress: ["", [Validators.required, Validators.maxLength(40)]],
/*       password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]], */
      phone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    });
  }

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      user => {
        if (user){
        this.currentUser = user;
        console.log('Usuario Obtenido: ', user);
        this.usuario = user;
        this.initializeForm();
      }}
    );
  }

  initializeForm(): void {
    if (this.usuario) {
        this.perfilForm.get('mail')?.setValue(this.usuario.correo);
        this.perfilForm.get('adress')?.setValue(this.usuario.direccion);
/*         this.perfilForm.get('password')?.setValue(this.usuario.clave); */
        this.perfilForm.get('phone')?.setValue(this.usuario.telefono);
    }
  }

  get mail() { return this.perfilForm.get('mail'); }
  get adress() { return this.perfilForm.get('adress'); }
/*   get password() { return this.perfilForm.get('password'); } */
  get phone() { return this.perfilForm.get('phone'); }

   onSubmit(value: any): void {
     if (this.usuario) {
       const updateUser: User = {
         ...this.usuario,
         correo: this.mail?.value,
         direccion: this.adress?.value,
/*          clave: this.password?.value,
 */         telefono: this.phone?.value,
        };

       this.userService.updateUser(+this.currentUserId, updateUser).subscribe(
         response => {
           console.log('Datos actualizados', response);
           alert('Los datos se han actualizado correctamente')
           this.router.navigate(['/home']);
           },
         
         error => {
           alert('Error al cargar los datos'), error;
         },
        );
      
     }}
}
