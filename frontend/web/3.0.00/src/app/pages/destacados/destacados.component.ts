import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { CarritoService } from '../../services/carrito.service';
import { SelectedUserService } from '../../services/selected-user.service';
import { Router } from '@angular/router';
import { UserServiceModel } from '../../models/userService';
import { Service } from '../../models/service';
import { UserServiceService } from '../../services/user-service.service';
import { ServiceService } from '../../services/service.service';



@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})

export class DestacadosComponent implements OnInit {
  destacadosUsuarios: User[] = [];
  currentUser: any;
  recomendacion: any;
  filteredUsers: User[] = [];
  services: Service[] = [];
  usersServicesArray: UserServiceModel [] = [];

  constructor(private userService: UserService,private loginService: LoginService,private _cartService: CarritoService, private selectedUserService: SelectedUserService,
    private router: Router, private usersServicesService: UserServiceService,
    private serviceService: ServiceService,) {}

  ngOnInit(): void {
    this.obtenerListaDeUsuariosDestacados();
  }
  obtenerListaDeUsuariosDestacados(){
    this.userService.getDestacadosPerfiles().subscribe(
      (data) => {
        this.destacadosUsuarios = data;
        this.filteredUsers = this.destacadosUsuarios;
  // Obtener servicios y usuarios vinculados después de obtener los usuarios
  this.serviceService.getAllServices().subscribe(
    services => {
      this.services = services;

      this.usersServicesService.getAllUsersServices().subscribe(
        usersServicesModel => {
          this.usersServicesArray = usersServicesModel;

          // Asignar profesiones después de obtener todas las listas necesarias
          this.asignarProfesiones(this.filteredUsers, this.services, this.usersServicesArray);
        }
      );
    }
  );



        this.loginService.getCurrentUser().subscribe(
          user => {
            this.currentUser = user;
          }
        );
      },
      (error) => {
        console.error('Error al obtener los usuarios destacados:', error);
      }
    );
  }
  asignarProfesiones(users: User[], services: Service[], usersServicesModel: UserServiceModel[]) {
    for (let user of users) {
      // console.log('Usuario:', user);
      for (let service of services) {
        // console.log('Servicio:', service);
        for (let userServiceModel of usersServicesModel) {
          // console.log('UserServiceModel:', userServiceModel);
          if (userServiceModel.usuario_id === user.id && userServiceModel.servicio_id === service.id) {
            // console.log(`Coincidencia encontrada: Usuario ID ${user.id} con Servicio ID ${service.id}`);
            user.profesion = service.nombre;
            // console.log(`Asignada profesión: ${service.nombre} al usuario ID ${user.id}`);
          }
        }
      }
    }
    this.tieneProfesion = true;
    // console.log('Profesiones asignadas:', users);
  }
  
  trackById(index: number, user: User): number {
    return user.id;
  }
  public addCart(user: User) {
    if (this.currentUser && this.currentUser.tipoUsuario === 'cliente') {
    console.log('Profesional almacenado correctamente:', user);
    this._cartService.changeCart(user);
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
    const selectedUser = this.destacadosUsuarios.find(user => user.id === userId);
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
  }else if (this.currentUser && this.currentUser.tipoUsuario === 'profesional') {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/advertencia']);
  }
  else {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/ingresar']);
    }
  }

  delRecomendacion(userId: any){
    if (this.currentUser && this.currentUser.tipoUsuario === 'cliente') {
    const selectedUser = this.destacadosUsuarios.find(user => user.id === userId);
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

  }else if (this.currentUser && this.currentUser.tipoUsuario === 'profesional') {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/advertencia']);
  }
   else {
    console.warn('Usuario no autenticado o no es cliente, redirigiendo a la página de login.');
    this.router.navigate(['/ingresar']);
    }
  }

  public selectedUser: User | null = null;

  public verDetalle(userId: number) {
    console.log('Ver detalle del usuario con ID:', userId);
    const selectedUser = this.destacadosUsuarios.find(user => user.id === userId);
    if (selectedUser) {
      console.log('Usuario seleccionado:', selectedUser);
      this.selectedUserService.selectedUser = selectedUser; // Guardar el usuario seleccionado en el servicio
      this.router.navigate(['/detalle-tarjeta', userId]); // Navegar hacia la vista de detalle-tarjeta con el ID del usuario
    } else {
      console.error('No se encontró el usuario con ID:', userId);
    }
  }
}

