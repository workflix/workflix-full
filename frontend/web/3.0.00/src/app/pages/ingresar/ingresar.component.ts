import { Component, ViewChild } from '@angular/core';
import {  OnInit, ElementRef, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { RecuperarClaveComponent } from '../recuperar-clave/recuperar-clave.component';

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [RecuperarClaveComponent, RouterModule],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.css'
})
export class IngresarComponent {
    @ViewChild('emailInput') emailInput: ElementRef | undefined;
  error: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(email: string, password: string): void {
    if (!email || !password) {
      this.error = 'Por favor ingresa el correo electrónico y la contraseña';
      return;
    }

    if (!this.isValidEmail(email)) {
      this.error = 'Por favor ingresa un correo electrónico válido';
      return;
    }

    if (password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    this.loginService.login(email, password).subscribe(
      (user) => {
        console.log('Inicio de sesión exitoso', user);
        alert ('Bienvenid@ a WorkflixWeb');
        if(user.tipoUsuario === 'admin'){
          this.router.navigate(['/dashboard']);
        }
        else{
        this.router.navigate(['/home']);
        }
      },
      (error) => {
        this.error = 'Nombre de usuario o contraseña incorrectas';
      }
    );
  }

  isValidEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateEmail(email: string): void {
    if (!email) {
      this.error = 'El correo electrónico es requerido.';
    } else if (!this.isValidEmail(email)) {
      this.error = 'Por favor ingresa un correo electrónico válido.';
    } else {
      this.error = ''; // Limpiar mensaje de error si la validación es exitosa
    }
  }
}
