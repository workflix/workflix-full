import { Component, HostListener, Inject, Input } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/modelos/modelo.resultado';
import { Usuario, TipoUsuario } from 'src/app/modelos/modelo.usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [UsuariosService ]
})
export class SidebarComponent {
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

  
  logout() {
    this.authService.logout()
      .subscribe((resultado: ResultadoApi) => {
        if (resultado.status == HttpStatusCode.Ok) {
          this.usuario = undefined;
          this.router.navigate((['/']));
        }
      });
  }

  onClickEnlace() {
    this.scrollingService.scrollToTop();
  }

  onClickPosition() {
    const destination = 500; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
//  isComponentVisible: boolean = true;

//  @HostListener('window:scroll', [])
//  onWindowScroll() {
//    // Lógica para determinar si se debe ocultar el componente
//    if (window.pageYOffset > 100) {
//      this.isComponentVisible = false;
//    } else {
//      this.isComponentVisible = true;
//    }
//  }
esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;

}
