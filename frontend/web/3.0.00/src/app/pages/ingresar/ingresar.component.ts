import { Component } from '@angular/core';
import { FormBuilder, MinValidator, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';
import {  OnInit, ElementRef, Input } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { subscribeOn } from 'rxjs';
import { RecuperarClaveComponent } from '../recuperar-clave/recuperar-clave.component';
/* 
import { ResultadoApi } from `../models/modelo.resultado`;
import { AuthService } from '../services/auth.service';
import { UsuariosService } from '../services/usuarios.service'; */


@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [RecuperarClaveComponent, RouterModule],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.css'
})
export class IngresarComponent {
  error: string = '';

  constructor(private loginService: LoginService, private router:Router) {}

  onSubmit(email: string, password: string): void {
    if (email && password) {
      this.loginService.login(email, password).subscribe(
        (user) => {
          console.log('Inicio de sesión exitoso', user);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.error = 'Nombre de usuario o contraseña incorrectas';
        }
      );
    } else {
      this.error = 'Por favor ingresa el correo electrónico y la contraseña';
    }
  }

  /* 
  loginForm!: FormGroup;
  usuario;
  @Input() resultado: ResultadoApi | undefined;
  
  forma!:FormGroup; // Declaración de la variable 'forma'
//------------------------------------------------------------------------------------
  get usuarioNoValido(){
    return this.forma.get('user')?.invalid && this.forma.get('user')?.touched;
  }

  get passwordNoValido(){
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }
//-----------------------------------------------------------------------------------
constructor(
  private fb: FormBuilder,
  private router: Router,
  private elementRef: ElementRef,
  private authService: AuthService
) {
  this.usuario = { user: "", password: "" };
  this.resultado = undefined;
  this.crearFormulario();
}
  ngOnInit(): void {
      this.loginForm = this.fb.group({
        user: [this.usuario.user, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        password: [this.usuario.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }
  crearFormulario(){
    this.forma = this.fb.group({
      user:['', [Validators.required , Validators.minLength(4)]],
      password:['', [Validators.required , Validators.minLength(6)]],
    }, {
    }
    )
  }

  get user() { return this.loginForm.get('user'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(value: any) {
  this.authService.login(value.user, value.password)
    .subscribe({
      next: (exito: ResultadoApi) => {
        this.resultado = undefined;
        this.router.navigate(['/']);
        this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = 0;
      },
      error: (error: ResultadoApi) => {
        this.resultado = error;
      },
      complete: () => {}
    });
}

  limpiar(){
  this.forma.reset();
  }

  guardar() {
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }
    const value = this.forma.value;
    this.onSubmit(value);
  } */

}
