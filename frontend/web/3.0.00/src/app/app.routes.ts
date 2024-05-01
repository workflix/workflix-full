import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { authGuard } from './guards/auth.guard';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'home', component: AcavElComponenteQueRepresenteHine, canActivate: [authGuard]}, No habilitar guard hasta que esté register
  { path: 'ingresar', component: IngresarComponent },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'registrarse', component: RegistrarseComponent },
];
