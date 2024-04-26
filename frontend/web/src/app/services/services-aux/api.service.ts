import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getCSRFToken() {
    const csrfTokenUrl = `${this.baseUrl}/get-csrf-token/`;
    return this.http.get<string>(csrfTokenUrl, { withCredentials: true });
  }

  login(username: string, password: string) {
    const loginUrl = `${this.baseUrl} login/`;

    // Obtener el token CSRF antes de realizar la solicitud de login
    return this.getCSRFToken().pipe(
      switchMap((csrfToken: string) => {
        const body = { username, password, csrfmiddlewaretoken: csrfToken as string };
        return this.http.post(loginUrl, body, { withCredentials: true });
      })
    );
  }
}