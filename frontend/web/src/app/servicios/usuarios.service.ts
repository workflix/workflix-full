import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { ResultadoApi } from '../modelos/modelo.resultado';
import { environment } from 'src/environments/environment';
import { TipoUsuario, Usuario } from '../modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private API_URL = environment.API_URL;
  private registracionUrl: string = `${this.API_URL}/auth/signup/`;
  private usuariosUrl: string = `${this.API_URL}/usuarios/`;

  constructor(private http: HttpClient) {
  }

  registrar(nombre: string, apellido: string, email: string, direccion: string, usuario: string, clave: string, telefono: string, tipo: TipoUsuario): Observable<ResultadoApi> {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email', email);
    formData.append('direccion', direccion);
    formData.append('usuario', usuario);
    formData.append('clave', clave);
    formData.append('telefono', telefono);
    formData.append('tipo', tipo.toString());
    formData.append('observaciones', "");

    return this.http.post<ResultadoApi>(this.registracionUrl, formData)
      .pipe(catchError(error => {
        const resultado: ResultadoApi = {
          mensaje: error.error.mensaje,
          data: error.error.data,
          status: error.error.status
        };

        return throwError(() => resultado);
      }));
  }

  obtenerInformacionUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuariosUrl);
  }
  

  restablecerClave(email: string): boolean {
    return true
  }

  contacto(nombre: string, email: string, razon: string, mensaje: string): boolean {
    
    return true;
  }

  modificar(usuario: Usuario, nuevaDireccion: string, nuevoEmail: string, nuevaClave: string, nuevoTelefono: string, nuevasObservaciones: string): Observable<Usuario> {
    const formData = new FormData();
    formData.append('direccion', nuevaDireccion);
    formData.append('email', nuevoEmail);
    formData.append('clave', nuevaClave);
    formData.append('telefono', nuevoTelefono);
    formData.append('observaciones', nuevasObservaciones);

    const url = `${this.usuariosUrl}${usuario.id}/`;

    return this.http.patch<Usuario>(url, formData);
    
  }
  

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
      .pipe(map(usuarios => usuarios as Usuario[]));
  }
}

export interface RespuestaToken {
  acceso: string;
  refresco: string;
}

export interface TokenUsuario {
  accessToken: RespuestaToken;
  usuarioActual: Usuario;
  carritoActual: number;
}
