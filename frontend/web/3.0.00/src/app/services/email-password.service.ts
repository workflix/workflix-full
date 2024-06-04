import { Injectable } from '@angular/core';
import { Enviroment } from '../envs/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email';
import { Password } from '../models/password';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {
  
  private url: string = Enviroment.URL_CLAVES;

  constructor(private http: HttpClient) { }

  public sendEmail(dto: Email): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/enviar-correo`, dto, { headers, responseType: 'text' });
  }

  public changePassword(dto: Password): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/cambiar-clave`, dto, { headers, responseType: 'text' });
  }
}


