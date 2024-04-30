import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { IngresarComponent } from './pages/ingresar/ingresar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ingresar', component: IngresarComponent },
];
