import { Component } from '@angular/core';
import { FormBuilder, MinValidator, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';
import {  OnInit, ElementRef, Input } from '@angular/core';

import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
/* 
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
 */
@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.css'
})
export class IngresarComponent {

}
