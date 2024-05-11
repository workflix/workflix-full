import { Router, CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isLoggedIn().pipe(
    map((loggedIn: boolean) => {
      if (loggedIn) {
        console.log('Usuario logeado: ' + loggedIn);
        return true;
      } else {
        const url = router.createUrlTree(['/ingresar']);
        return url;
      }
    })
  );
};

export const authGuardIsAdmin: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isloggedInAsAdmin().pipe(
    map((loggedInAsAdmin: boolean) => {
      if (loggedInAsAdmin) {
        console.log('Usuario logeado como admin: ' + loggedInAsAdmin);
        return true;
      } else {
        const url = router.createUrlTree(['/ingresar']);
        return url;
      }
    })
  );
};

export const authGuardIsCliente: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isloggedInAsCliente().pipe(
    map((loggedInAsCliente: boolean) => {
      if (loggedInAsCliente) {
        console.log('Usuario logeado como cliente: ' + loggedInAsCliente);
        return true;
      } else {
        const url = router.createUrlTree(['/ingresar']);
        return url;
      }
    })
  );
};



export const authGuardIsProfesional: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isloggedInAsProfesional().pipe(
    map((loggedInAsProfesional: boolean) => {
      if (loggedInAsProfesional) {
        console.log('Usuario logeado como profesional: ' + loggedInAsProfesional);
        return true;
      } else {
        const url = router.createUrlTree(['/ingresar']);
        return url;
      }
    })
  );
};
