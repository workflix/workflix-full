import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonModule} from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-perfil-profesional',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './perfil-profesional.component.html',
  styleUrl: './perfil-profesional.component.css'
})

export class PerfilProfesionalComponent implements OnInit {
  currentUser: User | null = null;
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
    this.perfilForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      mail: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      adress: ['', [Validators.required, Validators.maxLength(40)]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],

    });

  }

  ngOnInit(): void {
    
    this.loginService.getCurrentUser().subscribe(user => {
      if (user){
      this.currentUser = user;
      console.log('Usuario Obtenido', user);
      
      this.perfilForm.patchValue({
        nombre: user.nombre,
        apellido: user.apellido,
        mail: user.correo,
        adress: user.direccion,
        phone: user.telefono,
        descripcion: user.descripcion
      });
    } 
    });
  }

  onSubmit(formData: any): void {
    if (this.currentUser) {
      if (this.perfilForm.valid) {
        
        const newUserData = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.mail,
          direccion: formData.adress,
          telefono: formData.phone,
          descripcion: formData.descripcion
        
        };
      }}



}
