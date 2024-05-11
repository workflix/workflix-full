import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollingService } from '../../services/scrolling.service';
import { HttpStatusCode } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { IngresarComponent } from '../../pages/ingresar/ingresar.component';
import { QuienesSomosComponent } from '../../pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from '../../pages/contacto/contacto.component';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CarritoComponent ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {


  constructor(private loginService:LoginService, private router:Router){}

  currentUser: any;
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/ingresar']);
    console.log('Usuario desconectado'+ this.loginService.getCurrentUser())
  }

  ngOnInit(): void {
    // Aquí es donde deberías realizar suscripciones, ya que ngOnInit() se llama después de que Angular haya inicializado las propiedades del componente.
    this.loginService.getCurrentUser().subscribe(
      user => {
        this.currentUser = user;
        console.log('Usuario obtenido: ', user);
      }
    );
  }
  buscarProfesional(termino: string){ // barra búsqueda

    if (termino.length < 1) { // para que funcione sólo si escribe al menos una letra
      return;
    }

    this.router.navigate(['/busqueda', termino])
    /*console.log(termino);*/ // muestra en consola el término buscado

  }
}




  // public totalItem: number = 0; // buscar profesional
  // public searchKey: string = ''; // buscar profesonal
  // public isSidebarOpen: boolean = false;

  // @Input() /*usuario?: Usuario;*/
  // buscarTerm!: string;
  // buscarResults!: any[];
  // showResults: boolean = false

  // constructor(
  //   @Inject(DOCUMENT) private document: Document,
  //   /*private carritoService: CarritoService,*/
  //   private scrollingService: ScrollingService,

  //   /*private usuariosService: UsuariosService,
  //   private authService: AuthService,*/
  //   private router: Router
  // ) {
  //   /*this.authService.autenticado
  //     .subscribe((auth: boolean) => {
  //       if (auth) {
  //         this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
  //       }
  //       else {
  //         this.usuario = undefined;
  //       }
  //     });*/
  // }

  // ngOnInit(): void {
  //   /*this.usuario = this.authService.obtenerUsuarioSiNoExpiro();*/

  //   /*this.carritoService.getProfesionales().subscribe(res => {
  //     this.totalItem = res.length;
  //   });*/
  // }

  // sidebarToggle() { // comportamiento barra lateral
  //   this.document.body.classList.toggle('toggle-sidebar');
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }

  // search(event: any) { // captura valor ingresado en búsqueda
  //   this.searchKey = event.target.value;
  //   console.log(this.searchKey);
  //   /*this.carritoService.search.next(this.searchKey);*/
  // }

  // /*logout() {
  //   this.authService.logout()
  //     .subscribe((resultado: ResultadoApi) => {
  //       if (resultado.status == HttpStatusCode.Ok) {
  //         this.usuario = undefined;
  //         this.router.navigate((['/']));
  //       }
  //     });
  // }

  // esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

  // esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;*/


  // onClickEnlace() {
  //   this.scrollingService.scrollToTop();
  // }

