import { Component, OnInit } from '@angular/core';
import { ClassChartsVentas } from 'src/assets/datos/Class';
import { chartsVentas } from 'src/assets/datos/charts';

@Component({
  selector: 'app-admin-charts-ventas',
  templateUrl: './admin-charts-ventas.component.html',
  styleUrls: ['./admin-charts-ventas.component.css']
})
export class AdminChartsVentasComponent implements OnInit{

  lista: ClassChartsVentas[] = chartsVentas

  constructor() {
    //this.lista = tarjetas
    console.log(this.lista);
  }

  ngOnInit(): void {
    //this.lista = this.lista.filter(t => t.id >=2 );
    this.lista = chartsVentas
  }
}
