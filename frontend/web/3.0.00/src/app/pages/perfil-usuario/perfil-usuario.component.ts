import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core'
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  currentUser: any;
  perfilForm: FormGroup;
  usuario?: User;

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
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
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
      this.perfilForm.patchValue({
        mail: this.usuario.correo,
        adress: this.usuario.direccion,
        password: this.usuario.clave,
        phone: this.usuario.telefono,
      });
    }
  }

  get mail() { return this.perfilForm.get('mail'); }
  get adress() { return this.perfilForm.get('adress'); }
  get password() { return this.perfilForm.get('password'); }
  get phone() { return this.perfilForm.get('phone'); }

  onSubmit(): void {
    if (this.usuario) {
      const updateUser: User = {
        ...this.usuario, 
        correo: this.mail?.value, 
        direccion: this.adress?.value, 
        clave: this.password?.value, 
        telefono: this.phone?.value, 
      };

      this.userService.updateUser(updateUser).subscribe({
        next: (usuarioNuevo: User | null) => {
          if (usuarioNuevo) {
            this.usuario = usuarioNuevo
/*          this.loginService.currentUser.next(usuarioNuevo);
 */         alert('Datos actualizados');
          } else {
            alert('Los datos no han sido actualizados');
          }
        },
        error: (error: any) => {
          alert('Error al cargar los datos');
        }
      });
    }}
}