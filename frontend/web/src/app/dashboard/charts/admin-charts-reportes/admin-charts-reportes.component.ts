import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line max-len
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexYAxis, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';



import { graficoUsuarios } from "src/assets/datos/chartGraficoAreaVentas";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-admin-charts-reportes',
  templateUrl: './admin-charts-reportes.component.html',
  styleUrls: ['./admin-charts-reportes.component.css']
})
export class AdminChartsReportesComponent implements OnInit {
  chartOptions!: ChartOptions;

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: graficoUsuarios.monthDataSeries1.prices
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },

      title: {
        text: 'Reporte Total de venta de servicios',
        align: 'left'
      },
      subtitle: {
        text: 'Ventas mensuales',
        align: 'left'
      },
      labels: graficoUsuarios.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    };

    //  Llama al evento "resize", actualizando el chart.
    setTimeout(() => (window as any).dispatchEvent(new Event('resize')), 1);
  }
}
