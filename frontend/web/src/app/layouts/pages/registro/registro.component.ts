import { HttpStatusCode } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultadoApi } from 'src/app/modelos/modelo.resultado';
import { TipoUsuario } from 'src/app/modelos/modelo.usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ UsuariosService ]
})
export class RegistroComponent implements OnInit {
  registrarForm!: FormGroup
  usuarios = { fname: '', lname: '', mail: '', adress: '', user: '', password: '', phone: '' }

  @Input() resultado: ResultadoApi;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router) {
    this.resultado = {
      mensaje: "",
      data: {},
      status: 0 as HttpStatusCode
    }
  }

  ngOnInit(): void {
    this.registrarForm = this.fb.group({
      fname: [this.usuarios.fname, [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lname: [this.usuarios.lname, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      mail: [this.usuarios.mail, [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[^,;\s]+(?:.[a-zA-Z0-9-]+)$"), Validators.maxLength(45)]],
      adress: [this.usuarios.adress, [Validators.required, Validators.maxLength(40)]],
      user: [this.usuarios.user, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [this.usuarios.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      phone: [this.usuarios.phone, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    });
  }

  get fname() { return this.registrarForm.get('fname'); }
  get lname() { return this.registrarForm.get('lname'); }
  get mail() { return this.registrarForm.get('mail'); }
  get adress() { return this.registrarForm.get('adress'); }
  get user() { return this.registrarForm.get('user'); }
  get password() { return this.registrarForm.get('password'); }
  get phone() { return this.registrarForm.get('phone'); }

  onSubmit(value: any) {
    this.usuariosService.registrar(value.fname, value.lname, value.mail, value.adress, value.user, value.password, value.phone, TipoUsuario.Cliente)
      .subscribe({
        next: (exito: ResultadoApi) => {
          this.resultado = exito;
          // Redirigir a la página deseada
          this.router.navigate(['/login']);
        },
        error: (error: ResultadoApi) => { this.resultado = error; },
        complete: () => {}
      });
  }
}