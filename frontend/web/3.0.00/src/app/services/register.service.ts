import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Enviroment } from '../envs/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = Enviroment.URL_REGISTER;
  constructor(private http: HttpClient) { }

  registerUser(nombre: string, apellido: string, correo: string, clave: string, telefono: string): Observable<User> {
    // Crear parámetros para enviar en la URL
    const params = new HttpParams()
      .set('nombre', nombre)
      .set('apellido', apellido)
      .set('correo', correo)
      .set('clave', clave)
      .set('telefono', telefono);

    // Realizar la solicitud con los parámetros en la URL
    return this.http.post<User>(this.url, {}, { params: params }).pipe(
      tap(response => {
        console.log('Registro exitoso:', response);
      })
    );
  }

}
