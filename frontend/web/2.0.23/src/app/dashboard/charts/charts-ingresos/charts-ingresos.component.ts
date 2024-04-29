import { Component, OnInit } from '@angular/core';
import { ClassChartsIngresos } from 'src/assets/datos/Class';
import { chartsIngresos } from 'src/assets/datos/charts';

@Component({
  selector: 'app-charts-ingresos',
  templateUrl: './charts-ingresos.component.html',
  styleUrls: ['./charts-ingresos.component.css']
})
export class ChartsIngresosComponent implements OnInit{

  lista: ClassChartsIngresos[] = chartsIngresos

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsIngresos
  }



}
