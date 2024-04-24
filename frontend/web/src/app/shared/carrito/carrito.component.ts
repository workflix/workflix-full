import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  public profesionales : any = [];
  public granTotal !: number;
  constructor(private carritoService : CarritoService){ }

    ngOnInit(): void {
      this.carritoService.getProfesionales()
      .subscribe(res=>{
        this.profesionales = res;
        this.granTotal = this.carritoService.getTotalPrecio();
      })
    } 
    borrarItem(item : any){
      this.carritoService.borrarCarritoItem(item);
    }
    borrarCarrito(){
      this.carritoService.borrarTodoCarrito();
    }
  }
