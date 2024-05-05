import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/api/v1/user/login';

  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.url, { correo: email, clave: password }).pipe(
      tap((user: User) => {
        this.loggedIn.next(true);
        this.currentUser.next(user);

      })
    );
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  logout(){
    return this.loggedIn = false;
  }
}
