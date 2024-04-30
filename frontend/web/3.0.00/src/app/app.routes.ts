import { Routes } from '@angular/router';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: AcavElComponenteQueRepresenteHine, canActivate: [authGuard]}, No habilitar guard hasta que esté register
  { path: 'ingresar', component: IngresarComponent },
];
