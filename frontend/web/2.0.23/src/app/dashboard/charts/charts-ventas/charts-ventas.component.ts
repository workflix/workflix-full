import { Component, OnInit } from '@angular/core';
import { ClassChartsVentas } from 'src/assets/datos/Class';
import { chartsVentas } from 'src/assets/datos/charts';

@Component({
  selector: 'app-charts-ventas',
  templateUrl: './charts-ventas.component.html',
  styleUrls: ['./charts-ventas.component.css']
})
export class ChartsVentasComponent implements OnInit{

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
