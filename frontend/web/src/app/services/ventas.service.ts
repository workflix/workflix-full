import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../modelos/modelo.venta';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Envio } from '../modelos/modelo.envio';

@Injectable({
  providedIn: 'root'
})

export class VentasService {
  private API_URL = environment.API_URL;
  private ventasUrl: string = `${this.API_URL}/ventas/`;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  anotarVenta(envio: Envio): Observable<Venta> {
    let carrito = this.authService.obtenerCarritoActual();
    return this.http.post<Venta>(this.ventasUrl, {'carrito': carrito, 'envio': 1});
  }

  obtenerVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.ventasUrl);
  }
}
