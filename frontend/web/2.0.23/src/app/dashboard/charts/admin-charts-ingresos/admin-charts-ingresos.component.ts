import { Component, OnInit } from '@angular/core';
import { ClassChartsIngresos } from 'src/assets/datos/Class';
import { chartsIngresos } from 'src/assets/datos/charts';


@Component({
  selector: 'app-admin-charts-ingresos',
  templateUrl: './admin-charts-ingresos.component.html',
  styleUrls: ['./admin-charts-ingresos.component.css']
})
export class AdminChartsIngresosComponent  implements OnInit{

  lista: ClassChartsIngresos[] = chartsIngresos

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsIngresos
  }



}
