import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { Producto } from 'src/app/modelos/modelo.producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ViewportScroller } from '@angular/common';
import { AuthService } from 'src/app/servicios/auth.service';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-servicios-disponibles',
  templateUrl: './servicios-disponibles.component.html',
  styleUrls: ['./servicios-disponibles.component.css'],
  providers: [ ProductosService ]
})
export class ServiciosDisponiblesComponent implements OnInit{
  carrito: Producto[] = [];
  @Input() productos: Producto[] = [];
  isSelected = false;
  selectedProduct: any = null;
  conUsuario: boolean;

  constructor(@Inject(ViewportScroller) private viewportScroller: ViewportScroller, private productosService: ProductosService, private authService: AuthService, private carritoService: CarritoService) {
    this.conUsuario = authService.obtenerUsuarioSiNoExpiro() != null;
  }

  ngOnInit() : void {
    this.productosService.obtenerProductos()
      .subscribe((productos: Producto[]) => this.productos = productos);
  }

  toggleSelection(producto:any) {
    const screenWidth = window.innerWidth;
    const targetWidth = 780;

    if (screenWidth >= targetWidth) {
    this.isSelected = !this.isSelected;
    this.selectedProduct = producto;
     }else{}

  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!target.closest('.quitarZoom')) {
      this.isSelected = false;
    }
  }

  //Acomodé los ID y agg las img, junto con la funcion de agregarAlCarrito();
  agregarAlCarrito(producto: Producto) {
    console.log("agregando");
    this.carritoService.agregarProductoAlCarrito(producto)
      .subscribe(p => {
        if (p) {
          alert('El servicio fue agregado al carrito: ' + producto.nombre)
        }
        else {
          alert('Error agregando servicio al carrito');
        }
      });
  }
}