import { Component , OnInit } from '@angular/core';
import { IItem } from '../../interfaces/IItem';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  public items: Array<IItem> = [];

  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CarritoService) { }

  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    })
  }

  public remove(producto:IItem)
  {
   this._cartService.removeElementCart(producto);
  }


}
