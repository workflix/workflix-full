import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CarritoService } from 'src/app/services/carrito.service';
import { ScrollingService } from 'src/app/scrolling.service';
import { HttpStatusCode } from '@angular/common/http';

import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { Usuario, TipoUsuario } from 'src/app/models/modelo.usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
