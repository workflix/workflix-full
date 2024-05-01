import { Router, CanActivateFn } from '@angular/router'; // para manejar la navegación y crear guardias de ruta, respectivamente
import { inject } from '@angular/core'; //  para obtener instancias de servicios fuera de los constructores de Angular
import { LoginService } from '../services/login.service'; // para manejar la autenticación de usuarios

// para proteger ciertas rutas de acceso no autorizado

export const authGuard: CanActivateFn = ( route,state ) => { // puede activar o desactivar una ruta
  const loginService = inject(LoginService);
  const router = inject(Router);
if(loginService.isLoggedIn()){ // si el usuario está autenticado, devuelve true
  return true;
}else{
<<<<<<< HEAD
  const url = router.createUrlTree(['/login']); //  si el usuario no está autenticado, crea una URL para dirigirlo al login
=======
  const url = router.createUrlTree(['/ingresar']);
>>>>>>> a493b096cf638616eecc6c039d70a491d215df53
  return url;
}
};
