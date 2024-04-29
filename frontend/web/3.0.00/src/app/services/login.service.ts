import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Importa 'tap' para poder usarlo en el pipe


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/api/v1/user/login'; // Endpoint de inicio de sesión
  public loggedIn: boolean = false;

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<User> {
    // Realiza la solicitud de inicio de sesión
    return this.http.post<User>(this.url, { correo: email, clave: password })
      .pipe(
        tap((user: User) => {
          // Si la solicitud es exitosa, establece el estado de autenticación como verdadero
          this.loggedIn = true;
          console.log('ESTOY CONECTADO COMO: ' + this.loggedIn); // Mostrará el estado de autenticación
        })
      );
  }






}
