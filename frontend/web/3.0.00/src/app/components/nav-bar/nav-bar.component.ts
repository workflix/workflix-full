import { Component, ElementRef, HostListener, ViewChild, Inject, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CarritoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  
  isNavbarCollapsed = true;


  constructor(private loginService:LoginService, private router:Router, private _cartService:CarritoService, private eRef: ElementRef
  ){}
  public totalQuantity:number = 0;
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
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.totalQuantity = x.length;
      }
    })
  }
  buscarProfesional(termino: string){ // barra búsqueda

    if (termino.length < 1) { // para que funcione sólo si escribe al menos una letra
      return;
    }

    this.router.navigate(['/busqueda', termino])
    /*console.log(termino);*/ // muestra en consola el término buscado

  }
  public openCart:boolean = false;

  public cart(){ //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed
  }
  
  

  

}
