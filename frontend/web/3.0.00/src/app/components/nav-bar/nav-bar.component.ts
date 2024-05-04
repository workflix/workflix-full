import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollingService } from '../../services/scrolling.service';
import { HttpStatusCode } from '@angular/common/http';

import { Router } from '@angular/router';
import { IngresarComponent } from '../../pages/ingresar/ingresar.component';
import { QuienesSomosComponent } from '../../pages/quienes-somos/quienes-somos.component';
import { RouterModule} from '@angular/router';
import { ContactoComponent } from '../../pages/contacto/contacto.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [QuienesSomosComponent,
            RouterModule,
            IngresarComponent,
            ContactoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
 /* providers: [UsuariosService ]*/
})
export class NavBarComponent {

  /*public totalItem: number = 0; // buscar profesional
  public searchKey: string = ''; // buscar profesonal
  public isSidebarOpen: boolean = false;*/

  @Input() /*usuario?: Usuario;*/
  buscarTerm!: string;
  buscarResults!: any[];
  showResults: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scrollingService: ScrollingService,
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
  }

  /*search(event: any) { // captura valor ingresado en búsqueda
    this.searchKey = event.target.value;
    console.log(this.searchKey);
  }*/

  buscarProfesional(termino: string){ // barra búsqueda

    console.log(termino); // muestra en consola el término buscado

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
