import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './layouts/pages/home/home.component';
import { QuienesSomosComponent } from './layouts/pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './layouts/pages/contacto/contacto.component';
import { LoginComponent } from './layouts/pages/login/login.component';
import { RegistroComponent } from './layouts/pages/registro/registro.component';
import { ProfesionalesComponent } from './layouts/pages/profesionales/profesionales.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { PerfilUsuarioComponent } from './layouts/pages/perfil-usuario/perfil-usuario.component';
import { NotificacionesComponent } from './layouts/pages/notificaciones/notificaciones.component';
import { PreguntasFrecuentesComponent } from './layouts/pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { PagosComponent } from './layouts/pages/pagos/pagos.component';
import { FavoritosComponent } from './layouts/pages/favoritos/favoritos.component';
import { CarritoComponent } from './shared/carrito/carrito.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { CatServiciosComponent } from './layouts/pages/cat-servicios/cat-servicios.component';
import { ConfigAdminComponentimplements } from './layouts/pages/config-admin/config-admin.component';
import { ServiciosComponent } from './layouts/pages/servicios/servicios.component';
import { ServiciosDisponiblesComponent } from './layouts/pages/servicios-disponibles/servicios-disponibles.component';
import { ServicioCargaComponent } from './layouts/pages/servicio-carga/servicio-carga.component';
import { CarroComponent } from './layouts/pages/carro/carro.component';
import { ServiciosAgregarComponent } from './layouts/pages/servicios-agregar/servicios-agregar.component';
import { ServiciosCatComponent } from './layouts/pages/servicios-cat/servicios-cat.component';
import { ServiciosVendidosComponent } from './layouts/pages/servicios-vendidos/servicios-vendidos.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'notificaciones', component: NotificacionesComponent},
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent},
  { path: 'pagos', component: PagosComponent},
  { path: 'catServicios', component: CatServiciosComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'config-Admin', component: ConfigAdminComponentimplements},
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'serviciosAgregar', component: ServiciosAgregarComponent },
  { path: 'serviciosDisponibles', component: ServiciosDisponiblesComponent },
  { path: 'dashboard', component: AdminComponent },
  { path: 'dashboardUsuario', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'serviciosVendidos', component: ServiciosVendidosComponent },
  { path: 'catalogo', component: ServiciosCatComponent },
  { path: 'perfilUsuario', component: PerfilUsuarioComponent },
  { path: 'carro', component: CarroComponent },
  { path: 'servicioCarga', component: ServicioCargaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
