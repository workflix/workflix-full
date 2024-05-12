import { Component , OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  public items: Array<User> = [];
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CarritoService) { }

  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
      }
    })
  }

  public remove(producto:User)
  {
   this._cartService.removeElementCart(producto);
  }


}
