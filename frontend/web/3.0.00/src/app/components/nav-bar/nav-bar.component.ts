import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/*import { CarritoService } from 'src/app/services/carrito.service';*/
import { ScrollingService } from '../../services/scrolling.service';
import { HttpStatusCode } from '@angular/common/http';

import { Router } from '@angular/router';
/*import { ResultadoApi } from 'src/app/models/modelo.resultado'; // interface Resultado API
import { Usuario, TipoUsuario } from 'src/app/models/modelo.usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';*/
import { IngresarComponent } from '../../pages/ingresar/ingresar.component';
import { QuienesSomosComponent } from '../../pages/quienes-somos/quienes-somos.component';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [QuienesSomosComponent,
            RouterModule,
            IngresarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
 /* providers: [UsuariosService ]*/
})
export class NavBarComponent {

  public totalItem: number = 0; // buscar profesional
  public searchKey: string = ''; // buscar profesonal
  public isSidebarOpen: boolean = false;

  @Input() /*usuario?: Usuario;*/
  buscarTerm!: string;
  buscarResults!: any[];
  showResults: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    /*private carritoService: CarritoService,*/
    private scrollingService: ScrollingService,

    /*private usuariosService: UsuariosService,
    private authService: AuthService,*/
    private router: Router
  ) {
    /*this.authService.autenticado
      .subscribe((auth: boolean) => {
        if (auth) {
          this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
        }
        else {
          this.usuario = undefined;
        }
      });*/
  }

  ngOnInit(): void {
    /*this.usuario = this.authService.obtenerUsuarioSiNoExpiro();*/

    /*this.carritoService.getProfesionales().subscribe(res => {
      this.totalItem = res.length;
    });*/
  }

  sidebarToggle() { // comportamiento barra lateral
    this.document.body.classList.toggle('toggle-sidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  search(event: any) { // captura valor ingresado en búsqueda
    this.searchKey = event.target.value;
    console.log(this.searchKey);
    /*this.carritoService.search.next(this.searchKey);*/
  }

  /*logout() {
    this.authService.logout()
      .subscribe((resultado: ResultadoApi) => {
        if (resultado.status == HttpStatusCode.Ok) {
          this.usuario = undefined;
          this.router.navigate((['/']));
        }
      });
  }

  esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

  esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;*/


  onClickEnlace() {
    this.scrollingService.scrollToTop();
  }
}
