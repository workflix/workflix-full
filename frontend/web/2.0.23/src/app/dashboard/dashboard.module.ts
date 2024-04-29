import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ChartsIngresosComponent } from './charts/charts-ingresos/charts-ingresos.component';
import { OfrecerServicioComponent } from './ofrecer-servicio/ofrecer-servicio.component';
import { AdquirirServicioComponent } from './adquirir-servicio/adquirir-servicio.component';
import { ChartsVentasComponent } from './charts/charts-ventas/charts-ventas.component';
import { ChartsClientesComponent } from './charts/charts-clientes/charts-clientes.component';
import { ChartsReportesComponent } from './charts/charts-reportes/charts-reportes.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsVentasRecientesComponent } from './charts/charts-ventas-recientes/charts-ventas-recientes.component';
import { ChartsMejoresServiciosVendidosComponent } from './charts/charts-mejores-servicios-vendidos/charts-mejores-servicios-vendidos.component';
import { ChartsActividadRecienteComponent } from './charts/charts-actividad-reciente/charts-actividad-reciente.component';
import { ChartsInformeRadarComponent } from './charts/charts-informe-radar/charts-informe-radar.component';
import { ChartsTraficoSitioComponent } from './charts/charts-trafico-sitio/charts-trafico-sitio.component';
import { UsuarioComponent } from './usuario/usuario.component';



import { AdminChartsReportesComponent } from './charts/admin-charts-reportes/admin-charts-reportes.component';
import { AdminChartsVentasComponent } from './charts/admin-charts-ventas/admin-charts-ventas.component';
import { AdminChartsIngresosComponent } from './charts/admin-charts-ingresos/admin-charts-ingresos.component';
import { AdminChartsClientesComponent } from './charts/admin-charts-clientes/admin-charts-clientes.component';




@NgModule({
  declarations: [    
    AdminComponent,
    ChartsIngresosComponent,
    OfrecerServicioComponent,
    AdquirirServicioComponent,    
    ChartsVentasComponent, 
    ChartsClientesComponent, 
    ChartsReportesComponent,
     ChartsVentasRecientesComponent, 
     ChartsMejoresServiciosVendidosComponent, 
     ChartsActividadRecienteComponent, 
     ChartsInformeRadarComponent, 
     ChartsTraficoSitioComponent, 
     UsuarioComponent, 
     
     AdminChartsReportesComponent, AdminChartsVentasComponent, AdminChartsIngresosComponent, AdminChartsClientesComponent,
    





  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],

  


})
export class DashboardModule { }
