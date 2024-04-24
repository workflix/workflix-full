import { Component, OnInit } from '@angular/core';
import { ClassChartsVentasRecientes } from 'src/assets/datos/Class';
import { chartsVentasRecientes } from 'src/assets/datos/charts';

@Component({
  selector: 'app-charts-ventas-recientes',
  templateUrl: './charts-ventas-recientes.component.html',
  styleUrls: ['./charts-ventas-recientes.component.css']
})
export class ChartsVentasRecientesComponent implements OnInit{

  lista: ClassChartsVentasRecientes[] = chartsVentasRecientes

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsVentasRecientes
  }



}


