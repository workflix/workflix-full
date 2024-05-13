import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { authGuardIsAdmin, authGuardIsCliente, authGuardIsProfesional } from './guards/auth.guard';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { BusquedaProfesionalComponent } from './pages/busqueda-profesional/busqueda-profesional.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ValoracionPerfilComponent } from './pages/valoracion-perfil/valoracion-perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserCreateComponent } from './pages/dashboard/user-create/user-create.component';
import { SiteComponent } from './pages/site/site.component';
import { PerfilProfesionalComponent } from './pages/perfil-profesional/perfil-profesional.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'site', component: SiteComponent},
  { path: 'home', component: HomeComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [authGuardIsCliente] },
  { path: 'perfil-profesional', component: PerfilProfesionalComponent, canActivate: [authGuardIsProfesional] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'recuperar-clave', component: RecuperarClaveComponent },
  { path: 'busqueda/:termino', component: BusquedaProfesionalComponent },
  { path: 'valoracion', component: ValoracionPerfilComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [authGuardIsAdmin] },
  { path: 'dashboard/user-create', component: UserCreateComponent, canActivate: [authGuardIsAdmin] }

];

