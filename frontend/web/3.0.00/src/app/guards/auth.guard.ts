import { Router, CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);


if(loginService.isLoggedIn()){ // si el usuario está autenticado, devuelve true
  return true;
}else{
  const url = router.createUrlTree(['/ingresar']);
  return url;
}
};
