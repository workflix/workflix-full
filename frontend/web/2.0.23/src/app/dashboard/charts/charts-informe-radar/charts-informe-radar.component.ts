import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";

import { graficoInformePresupuesto } from "src/assets/datos/chartGraficoAreaVentas";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-charts-informe-radar',
  templateUrl: './charts-informe-radar.component.html',
  styleUrls: ['./charts-informe-radar.component.css']
})
export class ChartsInformeRadarComponent implements OnInit {
  chartOptions!: ChartOptions;

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Serie 1",
          data: graficoInformePresupuesto.serieUno.data
        },
        {
          name: "Serie 2",
          data: graficoInformePresupuesto.serieDos.data
        },
        {
          name: "Serie 3",
          data: graficoInformePresupuesto.serieTres.data
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]
      }
    };
  };

   
  }



