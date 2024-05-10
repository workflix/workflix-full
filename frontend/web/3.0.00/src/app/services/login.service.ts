import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/api/v1/user/login';

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedInAsAdmin = new BehaviorSubject<boolean>(false);
  private loggedInAsCliente = new BehaviorSubject<boolean>(false);
  private loggedInAsProfesional = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.url, { correo: email, clave: password }).pipe(
      tap((user: User) => {
        console.log('Usuario obtenido:', user);
        console.log('ESTOY CONECTADO COMO: '+user.tipoUsuario)
        this.currentUser.next(user);
        if(user.tipoUsuario === 'admin'){
          this.loggedInAsAdmin.next(true);
        }
        if(user.tipoUsuario === 'cliente'){
          this.loggedInAsCliente.next(true);
        }
        if(user.tipoUsuario === 'profesional'){
          this.loggedInAsProfesional.next(true);
        }
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  isloggedInAsAdmin(): Observable<boolean> {
    return this.loggedInAsAdmin.asObservable();
  }
  isloggedInAsCliente(): Observable<boolean> {
    return this.loggedInAsCliente.asObservable();
  }
  isloggedInAsProfesional(): Observable<boolean> {
    return this.loggedInAsProfesional.asObservable();
  }
  logout(): void {
    this.loggedIn.next(false);
    this.currentUser.next(null);
    console.log('Usuario desconectado');
  }
}
