import { Component, HostListener, Inject, Input } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { Usuario, TipoUsuario } from 'src/app/modelos/modelo.usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsuariosService ]
})
export class HomeComponent {

  @Input() usuario?: Usuario;
  buscarTerm!: string;
  buscarResults!: any[];
  showResults: boolean = false  

  constructor(
    @Inject(DOCUMENT) private document: Document,
    
    private scrollingService: ScrollingService,
  
    private usuariosService: UsuariosService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.autenticado
      .subscribe((auth: boolean) => {
        if (auth) {
          this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
        }
        else {
          this.usuario = undefined;
        }
      });
  }

  onClickEnlace() {
    this.scrollingService.scrollToTop();
  }
  
esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;


}
