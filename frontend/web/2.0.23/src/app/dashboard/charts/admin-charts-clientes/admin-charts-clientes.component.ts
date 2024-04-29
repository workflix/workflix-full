import { Component, OnInit } from '@angular/core';
import { ClassChartsClientes } from 'src/assets/datos/Class';
import { chartsClientes } from 'src/assets/datos/charts';

@Component({
  selector: 'app-admin-charts-clientes',
  templateUrl: './admin-charts-clientes.component.html',
  styleUrls: ['./admin-charts-clientes.component.css']
})
export class AdminChartsClientesComponent implements OnInit{

  lista: ClassChartsClientes[] = chartsClientes

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsClientes
  }
}
