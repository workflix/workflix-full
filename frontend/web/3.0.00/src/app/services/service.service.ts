import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Service } from '../models/service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlServices = 'http://localhost:8080/api/v1/services';
  private urlServicios = 'http://localhost:8080/servicios';
  
  constructor(private http: HttpClient) { }

  registerService(nombre: string): Observable<Service> {
    // Crear parámetros para enviar en la URL
    const params = new HttpParams()
     .set('nombre', nombre);

     // Realizar la petición
    return this.http.post<Service>(this.urlServices, {}, { params : params }).pipe(
      tap(response => {
        console.log('Registro exitoso:', response);
      })
    );
  }

  

  

  
}




