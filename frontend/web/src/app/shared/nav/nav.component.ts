import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CarritoService } from 'src/app/service/carrito.service';
import { ScrollingService } from 'src/app/scrolling.service';
import { HttpStatusCode } from '@angular/common/http';

import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/modelos/modelo.resultado';
import { Usuario, TipoUsuario } from 'src/app/modelos/modelo.usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UsuariosService ]
})
export class NavComponent {
  public totalItem: number = 0;
  public searchKey: string = '';
  public isSidebarOpen: boolean = false;

  @Input() usuario?: Usuario;
  buscarTerm!: string;
  buscarResults!: any[];
  showResults: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private carritoService: CarritoService,
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

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
  
    this.carritoService.getProfesionales().subscribe(res => {
      this.totalItem = res.length;
    });
  }

  sidebarToggle() {
    this.document.body.classList.toggle('toggle-sidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  search(event: any) {
    this.searchKey = event.target.value;
    console.log(this.searchKey);
    this.carritoService.search.next(this.searchKey);
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
  
  esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

  esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;


  onClickEnlace() {
    this.scrollingService.scrollToTop();
  }
}

