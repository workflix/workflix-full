import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProfesional(){
    return this.http.get<any>("assets/datos-profesionales/datos.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
