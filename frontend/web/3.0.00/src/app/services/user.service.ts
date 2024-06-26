import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Enviroment } from '../envs/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string= Enviroment.URL_USUARIOS;
  users: User[] = [];
  usuariosFiltrados: User[] = [];

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

  updateUser(id: number, bodyData: any): Observable<string> {
    return this.http.put<string>(`${this.url}/actualizar/${id}`, bodyData, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('Error al actualizar el usuario');
      })
    );
  }

  updateUserProfile(id: number, newData: any): Observable<string> {
    return this.http.post<string>(`${this.url}/perfil/${id}`, newData, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('Error al actualizar el perfil del usuario');
      })
    );
  }

  recomendarPerfil(id: number, recomendacion: number): Observable<string> {
    const body = { recomendacion: recomendacion };
    return this.http.put<string>(`${this.url}/recomendacion/${id}`, body, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('Error al recomendar el usuario');
      })
    );
  }

  getDestacadosPerfiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/destacados`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching destacados perfiles:', error);
        return throwError('Error fetching destacados perfiles');
      })
    );
  }

deleteUser(id: number): Observable<string> {
  return this.http.delete<string>(`${this.url}/eliminar/${id}`, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('Error al eliminar el usuario');
      })
    );

  }
  cargarUsuarios() {
    return new Promise<void>( (resolve, reject)=>{
      this.http.get<User[]>(this.url+'/listar').subscribe((resp: User[]) => {
        this.users=resp;
        resolve();
      });
    });
}

  buscarProfesional( termino: string){
    if (this.users.length === 0){
      //cargar usuarios
      this.cargarUsuarios().then(()=>{
        //ejecutar después de tener los usuarios
        //Aplicar filtro
        this.filtrarUsuarios(termino);
      });
    }else{
      //aplicar el filtro
      this.filtrarUsuarios(termino);
    }

    this.usuariosFiltrados = this.users.filter( usuario => {
      return true;
    }); // barre el arreglo y regresa un nuevo conjunto de datos, recibe una condición como parámetro
    console.log(this.usuariosFiltrados)
  }

  private filtrarUsuarios (termino: string){
    console.log(this.users);
    this.usuariosFiltrados = [];

    termino = termino.toLocaleLowerCase(); // para que no importe si escribe en may o min

    this.users.forEach(user => {
      const nombreLower = user.nombre.toLocaleLowerCase();
      const apellidoLower = user.apellido.toLocaleLowerCase();

      if (nombreLower.indexOf(termino) >= 0 || apellidoLower.indexOf (termino) >= 0){ // si lo que la persona escribe coincide con algo del "nombre"
        this.usuariosFiltrados.push(user); // lo agrego al arreglo usuariosFiltrados
      }
    })

  }

}
