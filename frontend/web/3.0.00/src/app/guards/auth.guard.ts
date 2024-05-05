import { Router, CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// para proteger ciertas rutas de acceso no autorizado

export const authGuard: CanActivateFn = ( route,state ) => { // puede activar o desactivar una ruta
  const loginService = inject(LoginService);
  const router = inject(Router);
if(loginService.isLoggedIn()){ // si el usuario está autenticado, devuelve true
  return true;
}else{
  const url = router.createUrlTree(['/ingresar']);
  return url;
}
};
