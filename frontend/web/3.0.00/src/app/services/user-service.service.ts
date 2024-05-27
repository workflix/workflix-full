import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url:string='http://localhost:8080/prestaciones';
  usersServices: UserService[] = [];
  constructor() { }
}
