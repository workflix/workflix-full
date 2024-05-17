import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { DetalleTarjeta } from '../detalle-tarjeta/detalle-tarjeta.component';
import { CarritoService } from '../../services/carrito.service';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  imports: [NavBarComponent, RouterModule, DetalleTarjeta, CommonModule]
})
export class TarjetasComponent implements OnInit {
  title: string = "List the users";
  test: string = "This is a test";
  currentUser: any;

  users: User[] = [];
  filteredUsers: User[] = [];
  profesiones: string[] = ['Albañil', 'Electricista', 'Seguridad', 'Pintor', 'Carpintero' ,'Plomero', 'Gasista', 'Cerrajero', 'Mueblero', 'Piletero' ]; // Lista de profesiones

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private _cartService: CarritoService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users.filter(user => user.tipo_usuario && user.tipo_usuario.toLowerCase() === 'profesional' && user.precio != null);
        this.filteredUsers = this.users; // Inicialmente, muestra todos los usuarios
        console.log('Users:', this.users);

        this.loginService.getCurrentUser().subscribe(
          user => {
            this.currentUser = user;
          }
        );
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  trackById(index: number, user: User): number {
    return user.id;
  }

  public addCart(user: User) {
    console.log('Profesional almacenado correctamente:', user);
    this._cartService.changeCart(user);
  }

  public verDetalle() {
    this.router.navigate(['/detalle-tarjeta']);
  }

  filtrarPorProfesion(profesion: string) {
    if (profesion === 'TODOS') {
      this.filteredUsers = this.users; // Mostrar todos los usuarios
    } else {
      this.filteredUsers = this.users.filter(user => user.profesion.toLowerCase() === profesion.toLowerCase());
    }
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
}
