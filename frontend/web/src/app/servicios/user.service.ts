import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url:string='http://localhost:8080/usuarios';
  
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url+'/listar');
  }

  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.url,user)
  }

  getUser(id: number): Observable<User> {
      return this.http.get<User>(this.url + '/' + id);
  }
    
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.url,user)
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.url + '/' + id);
}
}
