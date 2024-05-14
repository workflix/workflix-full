import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { graficoInformeTrafico } from "src/assets/datos/chartGraficoAreaVentas";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-charts-trafico-sitio',
  templateUrl: './charts-trafico-sitio.component.html',
  styleUrls: ['./charts-trafico-sitio.component.css']
})
export class ChartsTraficoSitioComponent implements OnInit {
  chartOptions!: ChartOptions;

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: graficoInformeTrafico.data,


      chart: {
        type: "donut"
      },
      labels: ["S.Ofrecidos", "S.contratados"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
   
  }

