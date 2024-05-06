import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @Input() datos?: any[] = [
    { id: 7, Nombre: 'Lucía', Apellido: 'Ramírez', tipo: 'Cliente' },
   { id: 8, Nombre: 'Diego', Apellido: 'Fernández', tipo: 'Cliente' },
  { id: 9, Nombre: 'Carla', Apellido: 'Sánchez', tipo: 'Cliente' },
  { id: 10, Nombre: 'Javier', Apellido: 'Gómez', tipo: 'Profesional' },
  { id: 11, Nombre: 'Laura', Apellido: 'Díaz', tipo: 'Profesional' },
  { id: 12, Nombre: 'Pablo', Apellido: 'Rodríguez', tipo: 'Profesional' }


   
    
  ];

  
  @Output() elementoSeleccionado: EventEmitter<any> = new EventEmitter(); // Evento para emitir el elemento seleccionado

  // Propiedades para el filtrado
  filtro: string = '';
  columnasVisibles: string[] = ['id', 'Nombre', 'Apellido', 'tipo']; // Array con las columnas a mostrar

  filtrarDatos() {
    const filtro = this.filtro.toLowerCase().trim(); // Convertir el filtro a minúsculas y eliminar espacios en blanco al inicio y al final
  
    return this.datos?.filter(elemento => {
      // Verificar si el tipo del elemento es exactamente "cliente"
      return elemento.tipo.toLowerCase() === 'cliente';
    });
  }

  filtrarProfesionales() {
    return this.datos?.filter(elemento => elemento.tipo.toLowerCase() === 'profesional');
  }

  // Método para seleccionar un elemento
  seleccionarElemento(elemento: any) {
    this.elementoSeleccionado.emit(elemento);
  }
}

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }