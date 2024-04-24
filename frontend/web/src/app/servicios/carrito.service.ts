import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Seleccion } from '../modelos/modelo.seleccion';
import { Producto } from '../modelos/modelo.producto';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Venta } from '../modelos/modelo.venta';
import { VentasService } from './ventas.service';
import { Envio } from '../modelos/modelo.envio';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private API_URL = environment.API_URL;
  private carritoUrl: string = `${this.API_URL}/carritos/`;

  constructor(private http: HttpClient, private authService: AuthService, private ventasService: VentasService, private router: Router) {
  }

  obtenerProductosCarrito(): Observable<Seleccion[]> {
    let carrito = this.authService.obtenerCarritoActual();
    return this.http.get<Seleccion[]>(`${this.carritoUrl}${carrito}`);
  }

  agregarProductoAlCarrito(producto: Producto): Observable<boolean> {
    let carrito = this.authService.obtenerCarritoActual();
    return this.http.put<boolean>(`${this.carritoUrl}${carrito}`, { articulo: producto.id, cantidad: 1 })
  }

  quitarProductoAlCarrito(producto: Producto): Observable<boolean> {
    let carrito = this.authService.obtenerCarritoActual();
    return this.http.put<boolean>(`${this.carritoUrl}${carrito}`, { articulo: producto.id, cantidad: -1 })
  }

  checkout(envio: Envio): Observable<Venta> {
    return this.ventasService.anotarVenta(envio);
  }

  refrescarCarrito(): Observable<number> {
    let cliente = this.authService.obtenerUsuarioSiNoExpiro();
    if (cliente) {
      return this.http.post<number>(this.carritoUrl, { "usuario": cliente.usuario });
    }

    return of(0);
  }
  
}
