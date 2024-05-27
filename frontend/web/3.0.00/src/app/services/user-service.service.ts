import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../envs/environment';
import { UserServiceModel } from '../models/userService';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string= Enviroment.URL_USUARIO_SERVICIO;

  constructor(private http:HttpClient) { }

  getAllUsersServices():Observable<UserServiceModel[]>{
    return this.http.get<UserServiceModel[]>(this.url+'/listar');
  }
}
