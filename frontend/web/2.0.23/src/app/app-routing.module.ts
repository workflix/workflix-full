import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { CarritoComponent } from './shared/carrito/carrito.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { CatServiciosComponent } from './pages/cat-servicios/cat-servicios.component';
import { ConfigAdminComponentimplements } from './pages/config-admin/config-admin.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ServiciosDisponiblesComponent } from './pages/servicios-disponibles/servicios-disponibles.component';
import { ServicioCargaComponent } from './pages/servicio-carga/servicio-carga.component';
import { CarroComponent } from './pages/carro/carro.component';
import { ServiciosAgregarComponent } from './pages/servicios-agregar/servicios-agregar.component';
import { ServiciosCatComponent } from './pages/servicios-cat/servicios-cat.component';
import { ServiciosVendidosComponent } from './pages/servicios-vendidos/servicios-vendidos.component';
import { FormContraseniaComponent } from './pages/form-contrasenia/form-contrasenia.component';



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
  { path: 'carrito', component: CarritoComponent },
  { path: 'password', component: FormContraseniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
