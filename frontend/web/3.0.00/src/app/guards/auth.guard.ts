import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verificar si el usuario está autenticado
    if (this.loginService.loggedIn) {
      // Si está autenticado, permitir acceso a todas las rutas excepto a 'login'
      if (state.url.includes('login')) {
        // Si el usuario está autenticado pero intenta acceder a la página de inicio de sesión,
        // redirigirlo a la página de inicio
        this.router.navigate(['/home']);
        return false;
      }
      return true; // Permitir acceso a la ruta
    } else {
      // Si el usuario no está autenticado y está intentando acceder a la página de inicio de sesión,
      // permitir el acceso
      if (state.url === '/login') {
        return true;
      }
      // Si el usuario no está autenticado y está intentando acceder a cualquier otra ruta,
      // redirigirlo a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
