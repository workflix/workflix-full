import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { TermsAndConditionsComponent } from './registro/terms-and-conditions/terms-and-conditions.component';
import { FormularioProfesionalesClientesComponent } from './formulario-profesionales-clientes/formulario-profesionales-clientes.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PagosComponent } from './pagos/pagos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CampoRComponent } from './campo-r/campo-r.component';
import { CatServiciosComponent } from './cat-servicios/cat-servicios.component';
import { ArtServiciosComponent } from './art-servicios/art-servicios.component';
import { ConfigAdminComponentimplements } from './config-admin/config-admin.component';
import { ServiciosDisponiblesComponent } from './servicios-disponibles/servicios-disponibles.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CarroComponent } from './carro/carro.component';
import { ServicioCargaComponent } from './servicio-carga/servicio-carga.component';
import { ServiciosAgregarComponent } from './servicios-agregar/servicios-agregar.component';
import { ServiciosCatComponent } from './servicios-cat/servicios-cat.component';
import { ServiciosVendidosComponent } from './servicios-vendidos/servicios-vendidos.component';







@NgModule({
  declarations: [
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent,    
    RegistroComponent,
    LoginComponent,
    ProfesionalesComponent,
    TermsAndConditionsComponent,
    FormularioProfesionalesClientesComponent,
    PerfilUsuarioComponent,
    NotificacionesComponent,
    PreguntasFrecuentesComponent,
    PagosComponent,
    FavoritosComponent,
    CampoRComponent,
    CatServiciosComponent,
    ArtServiciosComponent,
    ConfigAdminComponentimplements,
    ServiciosDisponiblesComponent,
    ServiciosComponent,
    
    CarroComponent,
          ServicioCargaComponent,
          ServiciosAgregarComponent,
          ServiciosCatComponent,
          ServiciosVendidosComponent,
     


  ],
  exports:[
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent,    
    RegistroComponent,
    ProfesionalesComponent,
    NotificacionesComponent
    
    
    
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule
    
    
    



  ]
})
export class PagesModule {  }
