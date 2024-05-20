import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {
  selectedUser: User | null = null;
  constructor() { }
}
