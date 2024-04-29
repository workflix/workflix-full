import { Component, OnInit } from '@angular/core';
import { ClassChartsClientes } from 'src/assets/datos/Class';
import { chartsClientes } from 'src/assets/datos/charts';

@Component({
  selector: 'app-charts-clientes',
  templateUrl: './charts-clientes.component.html',
  styleUrls: ['./charts-clientes.component.css']
})
export class ChartsClientesComponent implements OnInit{

  lista: ClassChartsClientes[] = chartsClientes

  constructor() {
    
    
  }

  ngOnInit(): void {
    
    this.lista = chartsClientes
  }
}
