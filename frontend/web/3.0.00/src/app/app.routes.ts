import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { authGuard } from './guards/auth.guard';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { BusquedaProfesionalComponent } from './pages/busqueda-profesional/busqueda-profesional.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ValoracionPerfilComponent } from './pages/valoracion-perfil/valoracion-perfil.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
/*   { path: 'admindash', component: AdminComponent }, */
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [authGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'recuperar-clave', component: RecuperarClaveComponent },
  { path: 'busqueda/:termino', component: BusquedaProfesionalComponent },
  { path: 'valoracion', component: ValoracionPerfilComponent }

];
