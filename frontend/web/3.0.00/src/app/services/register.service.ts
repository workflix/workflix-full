import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8080/api/v1/user/register';
  constructor(private http: HttpClient) { }

  registerUser(nombre: string, apellido: string, correo: string, clave: string, telefono: string): Observable<User> {
    // Crear parámetros para enviar en la URL
    const params = new HttpParams()
      .set('nombre', nombre)
      .set('apellido', apellido)
      .set('correo', correo)
      .set('clave', clave)
      .set('telefono', telefono);

   
  }

}
