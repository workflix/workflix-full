import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Enviroment } from '../envs/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string= Enviroment.URL_USUARIO_SERVICIO;

  constructor(private http:HttpClient) { }

  getAllUsersServices():Observable<UserService[]>{
    return this.http.get<UserService[]>(this.url+'/listar');
  }
}
