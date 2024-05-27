import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url:string='http://localhost:8080/prestaciones';
  usersServices: UserService[] = [];

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UserService[]>{
    return this.http.get<UserService[]>(this.url+'/listar');
  }
}
