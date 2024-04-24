import { Component, OnInit } from '@angular/core';
import { ClassChartsActividadReciente } from 'src/assets/datos/Class';
import { chartsActividadReciente } from 'src/assets/datos/charts';
import {  Input } from '@angular/core';
import { Venta } from 'src/app/modelos/modelo.venta';
import { VentasService } from 'src/app/servicios/ventas.service';
import { Seleccion } from 'src/app/modelos/modelo.seleccion';
import { FuncionesService } from 'src/app/servicios/funciones.service';

@Component({
  selector: 'app-charts-actividad-reciente',
  templateUrl: './charts-actividad-reciente.component.html',
  styleUrls: ['./charts-actividad-reciente.component.css'],
  providers: [ VentasService ]
})
export class ChartsActividadRecienteComponent  {

  @Input() ventas: Venta [] = [];

  constructor(private ventasService: VentasService, private funcionesService: FuncionesService) {
  }

  ngOnInit() : void {
    this.ventasService.obtenerVentas()
      .subscribe((ventas: Venta[]) => {
        this.ventas = ventas;
      });
  }

  obtenerArticulosVendidos(selecciones: Seleccion[]): string {
    return this.funcionesService.visualizarArticulos(selecciones);
  }

  visualizarFecha(fecha: Date): string {
    return this.funcionesService.visualizarFecha(fecha);
  }
}
