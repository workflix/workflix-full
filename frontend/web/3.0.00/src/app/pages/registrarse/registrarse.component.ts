import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { UserService} from '../../services/user.service' ;
import { User } from '../../models/user';

import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TerminosComponent } from '../terminos/terminos.component';
import { IngresarComponent } from '../ingresar/ingresar.component';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, IngresarComponent],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
  providers: [RegisterService, UserService]
})
export class RegistrarseComponent {
  error: string = '';
  registrarForm!: FormGroup
  usuarios = { fname: '', lname: '', mail: '', password: '', phone: '' }




  @ViewChild('modal') modal!: TerminosComponent; // Referencia al componente modal



constructor(
  private fb: FormBuilder,
  private registerService: RegisterService,
  private router: Router,
  public dialog: MatDialog // Agrega MatDialog aquí
) { }

openDialog() {
  const dialogRef = this.dialog.open(TerminosComponent, {
    // Opciones del modal como ancho, hasBackdrop, etc.
  });

  // Manejar cierre del modal
  dialogRef.afterClosed().subscribe(result => {
    // Acciones a realizar tras cerrar el modal
  });
}

  ngOnInit(): void {
    this.registrarForm = this.fb.group({

      fname: [this.usuarios.fname, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      lname: [this.usuarios.lname, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      mail: [this.usuarios.mail, [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[^,;\s]+(?:.[a-zA-Z0-9-]+)$"), Validators.maxLength(45)]],
      password: [this.usuarios.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      phone: [this.usuarios.phone, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      aceptoTerminos: [false, Validators.requiredTrue] // Inicializado con false
    });
  }

  get fname() { return this.registrarForm.get('fname'); }
  get lname() { return this.registrarForm.get('lname'); }
  get mail() { return this.registrarForm.get('mail'); }
  get password() { return this.registrarForm.get('password'); }
  get phone() { return this.registrarForm.get('phone'); }

  onSubmit() {
    if (this.registrarForm.valid) {
      const formData = this.registrarForm.value;
      const {fname, lname, mail, password, phone} = formData
      this.registrarse(fname ,lname , mail, password, phone);

      }else{
        this.error = 'Debe completar todos los campos';
      }
    }


    registrarse(fname:any, lname:any, mail:any, password:any, phone:any){
      this.registerService.registerUser(fname, lname, mail, password, phone)
      .subscribe({
        next: (exito: User) => {

          console.log('Usuario creado:', exito);

          this.router.navigate(['/ingresar']);
        },
        error: (error: any) => {
          this.router.navigate(['/ingresar']);
          console.error('Error al crear usuario:', error);
          console.log('No se pudo registrar correctamente: ' + error);
        }
      });
    }
  }






