import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs';
import { Producto } from '../modelos/modelo.producto';
import { TipoProducto } from '../modelos/modelo.tipoProducto';
import { ResultadoApi } from '../modelos/modelo.resultado';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  private API_URL = environment.API_URL;
  private productosUrl: string = `${this.API_URL}/articulos/`;
  private tiposProductosUrl: string = `${this.API_URL}/tipo_articulos/`;

  constructor(private http: HttpClient) {
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl)
      .pipe(map(productos => productos as Producto[]));
  }

  borrarProducto(producto: Producto): Observable<ResultadoApi> {
    let url = `${this.productosUrl}${producto.id}`;
    return this.http.delete<ResultadoApi>(url)
      .pipe(catchError(error => {
        const resultado: ResultadoApi = {
          mensaje: error.error.mensaje,
          data: error.error.data,
          status: error.error.status
        };

        return throwError(() => resultado);
      }));
  }

  crearProducto(nombre: string, descripcion: string, precio: number, cantidad: number, costo: number, imagen: File, tipoProducto: TipoProducto): Observable<ResultadoApi> {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio.toString());
    formData.append('cantidad', cantidad.toString());
    formData.append('costo', costo.toString());
    formData.append('tipo', tipoProducto.id.toString());
    formData.append('imagen', imagen);

    return this.http.post<ResultadoApi>(this.productosUrl, formData)
      .pipe(catchError(error => {
        const resultado: ResultadoApi = {
          mensaje: error.error.mensaje,
          data: error.error.data,
          status: error.error.status
        };

        return throwError(() => resultado);
      }));
  }

  modificarProducto(producto: Producto, nuevoNombre: string, nuevaDescripcion: string, nuevoPrecio: number, nuevoCosto: number, nuevaCantidad: number, nuevaImagen: File, nuevoTipo: number): Observable<Producto> {
    let url = `${this.productosUrl}${producto.id}/`;
    const formData = new FormData();
    formData.append('nombre', nuevoNombre);
    formData.append('descripcion', nuevaDescripcion);
    formData.append('precio', nuevoPrecio.toString());
    formData.append('cantidad', nuevaCantidad.toString());
    formData.append('costo', nuevoCosto.toString());
    formData.append('imagen', nuevaImagen);
    formData.append('tipo', nuevoTipo.toString());

    return this.http.put<Producto>(url, formData);
  }

  obtenerTipos(): Observable<TipoProducto[]> {
    return this.http.get<TipoProducto[]>(this.tiposProductosUrl)
      .pipe(map(response => response as TipoProducto[]));
  }

  borrarTipo(tipoProducto: TipoProducto): Observable<ResultadoApi> {
    let url = `${this.tiposProductosUrl}${tipoProducto.id}`;
    return this.http.delete<ResultadoApi>(url)
      .pipe(catchError(error => {
        const resultado: ResultadoApi = {
          mensaje: error.error.mensaje,
          data: error.error.data,
          status: error.error.status
        };

        return throwError(() => resultado);
      }));
  }

  crearTipo(nombre: string): Observable<ResultadoApi> {
    return this.http.post<ResultadoApi>(this.tiposProductosUrl, { "nombre": nombre })
      .pipe(catchError(error => {
        const resultado: ResultadoApi = {
          mensaje: error.error.mensaje,
          data: error.error.data,
          status: error.error.status
        };

        return throwError(() => resultado);
      }));
  }

  modificarTipo(tipoProducto: TipoProducto, nuevoNombre: string): Observable<TipoProducto> {
    let url = `${this.tiposProductosUrl}${tipoProducto.id}/`;
    return this.http.put<TipoProducto>(url, { "nombre": nuevoNombre });
  }

  buscar(term: string): Observable<any[]> {
    return this.http.get<any[]>(this.productosUrl).pipe(
      map((data) => data.filter(item =>
        item.nombre.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }
}
