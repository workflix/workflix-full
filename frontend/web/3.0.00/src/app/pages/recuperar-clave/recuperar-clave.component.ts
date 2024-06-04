import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from '../../models/email';
import { EmailPasswordService } from '../../services/email-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css'],
})
export class RecuperarClaveComponent {
  recuperarClave: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailPasswordService,
    private router: Router,
    private route: ActivatedRoute 
  ) {
    this.recuperarClave = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.route.queryParams.subscribe(params => {
      const token = params['tokenClave'];
    });
  }

  onSendEmail(): void {
    console.log('Correo enviado exitosamente ');
    if (this.recuperarClave.valid) {
      const email = this.recuperarClave.get('email')?.value;
      console.log('Email:', email);
      const dto = new Email(email);
      this.emailService.sendEmail(dto).subscribe(
        (data: any) => {
          console.log('Respuesta:', data);
          this.showNotification('Te enviamos un correo con un link para recuperar tu contraseña');
        },
        (err: any) => {
          console.log('Error:', err);
          this.showNotification('Error al enviar el correo');
        }
      );
    } else {
      console.log('Error al enviar el email');
      this.showNotification('Formulario inválido. Por favor, verifica los datos.');
    }
  }

  volver(): void {
    this.router.navigate(['/ingresar']);
  }

  showNotification(message: string): void {
    alert(message);
  }
}
