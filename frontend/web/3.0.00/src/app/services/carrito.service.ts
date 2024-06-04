import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public cart = new BehaviorSubject<Array<User>>([]); // Usa User en lugar de IItem
  public currentDataCart$ = this.cart.asObservable();

  constructor() { }

  public changeCart(newData: User) { // Usa User en lugar de IItem
    let listCart = this.cart.getValue();
    if (listCart) {
      let objIndex = listCart.findIndex((obj => obj.id == newData.id));
      if (objIndex != -1) {
        listCart[objIndex].cantidad += 1;
      } else {
        listCart.push(newData);
      }
    } else {
      listCart = [];
      listCart.push(newData);
    }

    this.cart.next(listCart);
  }

  public removeElementCart(newData: User) { // Usa User en lugar de IItem
    let listCart = this.cart.getValue();
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if (objIndex != -1) {
      listCart[objIndex].cantidad = 1;
      listCart.splice(objIndex, 1);
    }

    this.cart.next(listCart);
  }

}
