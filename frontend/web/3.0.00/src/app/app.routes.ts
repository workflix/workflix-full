import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { authGuard } from './guards/auth.guard';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: AcavElComponenteQueRepresenteHine, canActivate: [authGuard]}, No habilitar guard hasta que esté register
  { path: 'ingresar', component: IngresarComponent },
  { path: 'tarjetas', component: TarjetasComponent }
];
