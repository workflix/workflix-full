import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public carritoItemlist : any=[];
  public profesionalesList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProfesionales(){
    return this.profesionalesList.asObservable();
  }

  setProfesionales(profesionales : any){
    this.carritoItemlist.push(...profesionales);
    this.profesionalesList.next(profesionales);
  }
  agregarCarrito(profesionales : any){
    this.carritoItemlist.push(profesionales);
    this.profesionalesList.next(this.carritoItemlist);
    this.getTotalPrecio();
    console.log(this.carritoItemlist)
  }
  getTotalPrecio() : number{
    let granTotal = 0;
    this.carritoItemlist.map((a: any)=>{
      granTotal +=a.total;
    })
    return granTotal;
  }
  borrarCarritoItem(profesionales : any){
    this.carritoItemlist.map((a:any, index:any)=>{
      if(profesionales.id===a.id){
        this.carritoItemlist.splice(index, 1);
      }
    })
    this.carritoItemlist = []
    this.profesionalesList.next(this.carritoItemlist);
  }
    borrarTodoCarrito(){
      this.carritoItemlist = []
      this.profesionalesList.next(this.carritoItemlist);
    }
}
