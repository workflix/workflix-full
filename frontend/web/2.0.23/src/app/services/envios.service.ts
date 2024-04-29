import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Envio } from '../models/modelo.envio';

@Injectable({
  providedIn: 'root'
})

export class EnviosService {
  private enviosUrl: string = 'assets/envios.json';

  constructor(private http: HttpClient) {
  }

  obtenerEnvios() : Observable<Envio[]> {
    return this.http.get<Envio[]>(this.enviosUrl);
  }

  crear(nombre: string, precio: number): boolean {
    return true;
  }

  borrar(envio: Envio): boolean {
    return true;
  }

  modificar(envio: Envio, nombre: string, costo: number): boolean {
    return true;
  }
}
