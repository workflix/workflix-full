import { Component , OnInit } from '@angular/core';
import { IItem } from '../../interfaces/IItem';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  public items: Array<IItem> = [];

  constructor() { }

  ngOnInit() {

  }

public remove(producto:IItem)
  {
    //Ya vamos a ver que hacemos acá
  }

}
