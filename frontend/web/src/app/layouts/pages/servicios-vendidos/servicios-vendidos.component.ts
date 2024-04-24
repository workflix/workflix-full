import { Component, Input } from '@angular/core';
import { Venta } from 'src/app/modelos/modelo.venta';
import { VentasService } from 'src/app/servicios/ventas.service';
import { Seleccion } from 'src/app/modelos/modelo.seleccion';
import { FuncionesService } from 'src/app/servicios/funciones.service';

@Component({
  selector: 'app-servicios-vendidos',
  templateUrl: './servicios-vendidos.component.html',
  styleUrls: ['./servicios-vendidos.component.css'],
  providers: [ VentasService ]
})
export class ServiciosVendidosComponent {
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
