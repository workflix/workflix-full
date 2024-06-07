import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from '../../models/password';
import { EmailPasswordService } from '../../services/email-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent {

  restablecerClave: FormGroup;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private emailPasswordService: EmailPasswordService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.restablecerClave = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onChangePassword(): void {
    const password = this.restablecerClave.get('password')?.value;
    const confirmPassword = this.restablecerClave.get('confirmPassword')?.value;
  
    if (confirmPassword !== password) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const tokenPassword = this.route.snapshot.params['tokenClave'];
    console.log('tokenPassword', tokenPassword);
    const dto = new Password(password, confirmPassword, tokenPassword);
    console.log('dto', dto);
  
    this.emailPasswordService.changePassword(dto).subscribe(
      (data: any) => {
        alert('Contraseña cambiada exitosamente');
        this.router.navigate(['/ingresar']);
      },
      (err: any) => {
        alert('Error al cambiar la contraseña');
        console.error(err); // Registrar el error en la consola
      }
    );
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    } else if (field === 'confirmPassword') {
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
    }
  }

  volver(): void {
    this.router.navigate(['/ingresar']);
  }

}
