import { Component, OnInit } from '@angular/core';
import { ClassChartsMServiciosVendidos } from 'src/assets/datos/Class';
import { chartsMServiciosVendidos } from 'src/assets/datos/charts';

@Component({
  selector: 'app-charts-mejores-servicios-vendidos',
  templateUrl: './charts-mejores-servicios-vendidos.component.html',
  styleUrls: ['./charts-mejores-servicios-vendidos.component.css']
})
export class ChartsMejoresServiciosVendidosComponent implements OnInit{

  lista: ClassChartsMServiciosVendidos[] = chartsMServiciosVendidos

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsMServiciosVendidos
  }


}
