import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { CarritoService } from '../../services/carrito.service';
import { SelectedUserService } from '../../services/selected-user.service';
import { Router } from '@angular/router';



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
  constructor(private userService: UserService,private loginService: LoginService,private _cartService: CarritoService, private selectedUserService: SelectedUserService,
    private router: Router,) {}

  ngOnInit(): void {
    this.userService.getDestacadosPerfiles().subscribe(
      (data) => {
        this.destacadosUsuarios = data;
        console.log('Usuarios destacados:', this.destacadosUsuarios);
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
  trackById(index: number, user: User): number {
    return user.id;
  }

  public addCart(user: User) {
    console.log('Profesional almacenado correctamente:', user);
    this._cartService.changeCart(user);
  }

  generateStars(recomendacion: number): string[] {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      stars.push(i < recomendacion ? 'fas fa-star' : 'fa-regular fa-star');
    }
    return stars;
  }

  addRecomendacion(userId: any){
    const selectedUser = this.destacadosUsuarios.find(user => user.id === userId);
    if (selectedUser) {
      if(selectedUser.recomendacion <= 4){
        this.recomendacion = selectedUser.recomendacion ++;
        this.userService.recomendarPerfil(selectedUser.id,this.recomendacion).subscribe(
        response => {
        console.log('Recomendar fue actualizado con éxito:', response);
        alert ('ID: ' + selectedUser.id);
        alert ('RECOMENDACIONES SUMA: ' + this.recomendacion);
      },
        error => {
          console.error('Error al actualizar la recomendacion:', error);
        }
      ) };
    } else {
      console.error('No se encontró el usuario con ID:', userId);
    }

  }
  delRecomendacion(userId: any){
    const selectedUser = this.destacadosUsuarios.find(user => user.id === userId);
    if (selectedUser) {
      if(selectedUser.recomendacion >= 0){
        this.recomendacion = selectedUser.recomendacion --;
        this.userService.recomendarPerfil(selectedUser.id,this.recomendacion).subscribe(
        response => {
        console.log('Recomendar fue actualizado con éxito:', response);
        alert ('ID: ' + selectedUser.id);
        alert ('RECOMENDACIONES RESTA: ' + this.recomendacion);
      },
        error => {
          console.error('Error al actualizar la recomendacion:', error);
        }
      )};
    } else {
      console.error('No se encontró el usuario con ID:', userId);
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
