import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Service } from '../models/service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlServices = 'http://localhost:8080/api/v1/services';
  private urlServicios = 'http://localhost:8080/servicios';
  
  constructor(private http: HttpClient) { }

  
}




