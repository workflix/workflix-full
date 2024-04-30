import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: AcavElComponenteQueRepresenteHine, canActivate: [authGuard]}, No habilitar guard hasta que esté register
];
