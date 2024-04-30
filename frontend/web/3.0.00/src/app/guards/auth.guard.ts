import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';


export const authGuard: CanActivateFn = ( route,state ) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
if(loginService.isLoggedIn()){
  return true;
}else{
  const url = router.createUrlTree(['/login']);
  return url;
}
};
