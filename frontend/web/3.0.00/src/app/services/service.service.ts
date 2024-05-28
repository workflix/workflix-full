import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Service } from '../models/service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Enviroment } from '../envs/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string = Enviroment.URL_SERVICIOS;

  constructor(private http: HttpClient) { }

  services: Service[] = [];
  serviciosFiltrados: Service[] = [];

  getAllServices():Observable<Service[]>{
    return this.http.get<Service[]>(this.url+'/listar');
  }

  createService(nombre: string): Observable<Service> {
    return this.http.post<Service>(this.url+'/agregar', { nombre: nombre });
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(this.url + '/' + id);
  }

  updateService(id: number, bodyData: any): Observable<string> {
    return this.http.put<string>(`${this.url}/actualizar/${id}`, bodyData, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse)=> {
        return throwError('Error al actualizar el servicio');
      })
    );
  }

  deleteService(id: number): Observable<string> {
    return this.http.delete<string>(`${this.url}/eliminar/${id}`, { responseType: 'text' as 'json' })
     .pipe(
        catchError((error: HttpErrorResponse)=> {
          return throwError('Error al eliminar el servicio');
        })
      );
  }

  cargarServicios() {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Service[]>(this.url + '/listar').subscribe((resp: Service[]) => {
        this.services = resp;
        resolve();
      });
    });
  }

  buscarServicio(termino: string): void {
    if (this.services.length === 0) {
      this.cargarServicios().then(() => {
        this.filtrarServicios(termino);
      });
    } else {
      this.filtrarServicios(termino);
    }

    this.serviciosFiltrados = this.services.filter( servicio => {
      return true;
    });
    console.log(this.serviciosFiltrados);
  }

  private filtrarServicios(termino: string) {
    console.log(this.services);
    this.serviciosFiltrados = [];

    termino = termino.toLowerCase();

    this.services.forEach( service => {
      const nombreLower = service.nombre.toLowerCase()

      if(nombreLower.indexOf(termino)) {
        this.serviciosFiltrados.push(service);
        }
    })
  }

  getServicesByName(): Observable<string[]> {
    return this.http.get<Service[]>(this.url+'/listar').pipe(
      map((services: Service[]) => services.map(service => service.nombre)),
      catchError((error: HttpErrorResponse) => {
        return throwError('Error al obtener los servicios');
      })
    );
  }


}




