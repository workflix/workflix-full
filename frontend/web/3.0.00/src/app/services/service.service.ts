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

  services: Service[] = [];
  serviciosFiltrados: Service[] = [];

  getAllServices():Observable<Service[]>{
    return this.http.get<Service[]>(this.urlServicios+'/listar');
  }

  createService(nombre: string): Observable<Service> {
    return this.http.post<Service>(this.urlServicios, { nombre: nombre });
  }
  
  getService(id: number): Observable<Service> {
    return this.http.get<Service>(this.urlServicios + '/' + id);
  }

  updateService(id: number, bodyData: any): Observable<string> {
    const url = `http://localhost:8080/servicios/actualizar/${id}`;
    return this.http.put<string>(url, bodyData, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse)=> {
        return throwError('Error al actualizar el servicio');
      })
    );
  }

  deleteService(id: number): Observable<string> {
    const url = `http://localhost:8080/servicios/eliminar/${id}`;
    return this.http.delete<string>(url, { responseType: 'text' as 'json' })
     .pipe(
        catchError((error: HttpErrorResponse)=> {
          return throwError('Error al eliminar el servicio');
        })
      );
  }

  cargarServicios() {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Service[]>(this.urlServicios + '/listar').subscribe((resp: Service[]) => {
        this.services = resp;
        resolve();
      });
    });
  }



}




