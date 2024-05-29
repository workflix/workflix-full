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
import { SelectedUserService } from '../../services/selected-user.service';
import { of } from 'rxjs';
import { UserServiceModel } from '../../models/userService';
import { UserServiceService } from '../../services/user-service.service';
import { Service } from '../../models/service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  imports: [NavBarComponent, RouterModule, CommonModule, DetalleTarjeta]
})
export class TarjetasComponent implements OnInit {
  title: string = "List the users";
  test: string = "This is a test";
  currentUser: any;
  recomendacion: any;

  usersServicesArray: UserServiceModel [] = [];
  users: User[] = [];
  services: Service[] = [];
  filteredUsers: User[] = [];
  tieneProfesion: Boolean = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private userService: UserService,
    private _cartService: CarritoService,
    private router: Router,
    private loginService: LoginService,
    private selectedUserService: SelectedUserService,
    private usersServicesService: UserServiceService,
    private serviceService: ServiceService,
  ) {}

  ngOnInit(): void {
    this.obtenerListaDeUsuarios();
  }

  obtenerListaDeUsuarios() {
    // Todos los usuarios
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users.filter(user => user.tipo_usuario && user.tipo_usuario.toLowerCase() === 'profesional' && user.precio != null);
        this.filteredUsers = this.users; // Inicialmente, muestra todos los usuarios

        // Obtener servicios y usuarios vinculados después de obtener los usuarios
        this.serviceService.getAllServices().subscribe(
          services => {
            this.services = services;

            this.usersServicesService.getAllUsersServices().subscribe(
              usersServicesModel => {
                this.usersServicesArray = usersServicesModel;

                // Asignar servicios después de obtener todas las listas necesarias
                this.asignarServicios(this.filteredUsers, this.services, this.usersServicesArray);
              }
            );
          }
        );

        // Obtener el usuario actual
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


  asignarServicios(users: User[], services: Service[], usersServicesModel: UserServiceModel[]) {
    for (let user of users) {
      user.servicios = [];
      for (let userServiceModel of usersServicesModel) {
        if (userServiceModel.usuario_id === user.id) {
          const service = services.find(s => s.id === userServiceModel.servicio_id);
          if (service) {
            user.servicios.push(service);
          }
        }
      }
      console.log(`User: ${user.nombre}, Servicios: ${user.servicios.map(s => s.nombre).join(', ')}`); // Línea de depuración
    }
    this.tieneProfesion = true;
  }


  trackById(index: number, user: User): number {
    return user.id;
  }

  public addCart(user: User) {
    if (this.currentUser && this.currentUser.tipoUsuario === 'cliente') {
        console.log('Profesional almacenado correctamente:', user);
        const cartValue = this._cartService.cart.getValue(); // Obtenemos el valor actual del BehaviorSubject
        if (cartValue.length < 4) {
            console.log('Usuario almacenado correctamente:', user);
            this._cartService.changeCart(user);
        } else {
            alert('Solo puedes contratar a 4 servicios a la vez')
            console.warn('No se pueden agregar más usuarios, el carrito está lleno.');
        }
    }else if (this.currentUser && this.currentUser.tipoUsuario === 'profesional') {
      console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
      this.router.navigate(['/advertencia']);
    } else {
        console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
        this.router.navigate(['/ingresar']);
    }
}


  generateStars(recomendacion: number): string[] {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      stars.push(i < recomendacion ? 'fas fa-star' : 'fa-regular fa-star');
    }
    return stars;
  }

  addRecomendacion(userId: any){
    if (this.currentUser && this.currentUser.tipoUsuario === 'cliente') {
    const selectedUser = this.filteredUsers.find(user => user.id === userId);
    if (selectedUser) {
      if(selectedUser.recomendacion <= 4){
        this.recomendacion = selectedUser.recomendacion ++;
        this.userService.recomendarPerfil(selectedUser.id,this.recomendacion).subscribe(
        response => {
        console.log('Recomendar fue actualizado con éxito:', response);
      },
        error => {
          console.error('Error al actualizar la recomendacion:', error);
        }
      ) };
    } else {
      console.error('No se encontró el usuario con ID:', userId);
    }
  }else {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/ingresar']);
    }
  }
  delRecomendacion(userId: any){
    if (this.currentUser && this.currentUser.tipoUsuario === 'cliente') {
    const selectedUser = this.filteredUsers.find(user => user.id === userId);
    if (selectedUser) {
      if(selectedUser.recomendacion >= 0){
        this.recomendacion = selectedUser.recomendacion --;
        this.userService.recomendarPerfil(selectedUser.id,this.recomendacion).subscribe(
        response => {
        console.log('Recomendar fue actualizado con éxito:', response);
      },
        error => {
          console.error('Error al actualizar la recomendacion:', error);
        }
      )};
    } else {
      console.error('No se encontró el usuario con ID:', userId);
    }
  }else {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/ingresar']);
    }
  }

  public selectedUser: User | null = null;

  public verDetalle(userId: number) {
    console.log('Ver detalle del usuario con ID:', userId);
    const selectedUser = this.filteredUsers.find(user => user.id === userId);
    if (selectedUser) {
      console.log('Usuario seleccionado:', selectedUser);
      this.selectedUserService.selectedUser = selectedUser;
      this.router.navigate(['/detalle-tarjeta', userId]);
    } else {
      console.error('No se encontró el usuario con ID:', userId);
    }
  }



  filtrarPorProfesion(serviceName: string) {
    if (serviceName === 'TODOS') {
      this.filteredUsers = this.users; // Mostrar todos los usuarios
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.servicios?.some(service => service.nombre.toLowerCase() === serviceName.toLowerCase())
      );
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
