import { Component, OnInit } from '@angular/core';
import { ClassChartsActividadReciente } from 'src/assets/datos/Class';
import { chartsActividadReciente } from 'src/assets/datos/charts';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit{

  lista: ClassChartsActividadReciente[] = chartsActividadReciente

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsActividadReciente
  }
}
