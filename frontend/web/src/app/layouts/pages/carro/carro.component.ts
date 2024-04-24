import { Component, Input } from '@angular/core';
import { Envio } from 'src/app/modelos/modelo.envio';
import { Producto } from 'src/app/modelos/modelo.producto';
import { Seleccion, SeleccionClass } from 'src/app/modelos/modelo.seleccion';
import { Router } from '@angular/router';
import { EnviosService } from 'src/app/servicios/envios.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
  providers: [CarritoService, EnviosService]
})
export class CarroComponent {
  total: number = 0
  totalCarrito: number = 0;
  envioElegido: Envio;
  mostrarTarjeta: boolean = false; //
  @Input() carrito: Seleccion[] = [];
  @Input() envios: Envio[] = [];

  opcionPago: string = '';

  uncheckOther(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const checkboxes = Array.from(document.getElementsByName('opcionPago')) as HTMLInputElement[];
    checkboxes.forEach(cb => {
      if (cb !== checkbox) {
        cb.checked = false;
      } else {
        this.opcionPago = checkbox.value; // Asignar el valor seleccionado a la propiedad opcionPago
      }
    });
  
    this.mostrarTarjeta = this.opcionPago === 'efectivo'; // Mostrar el div "tarjeta" si la opción seleccionada es "efectivo"
  }

  constructor(private carritoService : CarritoService, private enviosService : EnviosService, private router: Router, private authService: AuthService) {
    this.envioElegido = {
      id: -1,
      nombre: "Default",
      costo: 0
    }
  }

  // Agrego enrutamiento
  aggProductos() {
    this.router.navigate(['/servicios-cat']);
  }

  ngOnInit(): void {
    this.enviosService.obtenerEnvios()
      .subscribe((envios: Envio[]) => {
        this.envios = envios;
        this.envioElegido = envios[0];
      });

    this.carritoService.obtenerProductosCarrito()
      .subscribe((selecciones: Seleccion[]) => {
        this.carrito = selecciones;
        this.totalCarrito = this.carritoSuma();
      });
  }

  seleccionarEnvio(event: any) {
    this.envioElegido = this.envios.filter(p => p.id == event.target.value)[0];
    this.totalCarrito = this.carritoSuma()
  }

  carritoSuma(): number {
    let total = 0;
    for(let i = 0; i < this.carrito.length; i++) {
      total += this.carrito[i].cantidad * this.carrito[i].articulo.precio; // TODO: Esto deberia estar dentro de carrito
    }

    total += this.envioElegido?.costo ?? 0;
    return total;
  }

  // Elimino todos los productos una vez pagados y restauro el valor total
  pagar(): void {    
    this.carritoService.checkout(this.envioElegido).subscribe(v => {
      // Manejar la respuesta de la venta
    });
    alert('Has pagado correctamente');
  this.carritoService.refrescarCarrito().subscribe(c => {
    if (c > 0) this.authService.cambiarCarrito(c);

    this.total = 0;
    this.totalCarrito = 0;
    this.carrito = [];
    const carritoReducido = this.getCarritoReducido();

    this.router.navigate(['/home']);
   
  });
}


  // Agrego un producto al carrito
  agregarAlCarrito(producto: Producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.carrito.push(new SeleccionClass(producto, 1));
      this.total += producto.precio;
    }
    if(producto.cantidad === 0){
      alert('No hay un servicio disponible: '+ producto.nombre)
    }
  }

  // Elimino un producto al carrito
  eliminarDelCarrito(producto: Producto) {
    const index = this.carrito.findIndex(p => p.articulo.id === producto.id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.total -= producto.precio;
      producto.cantidad++;
    }
  }

 // Creo un array para almacenar los elementos repetidos
  getCarritoReducido(){
    const carritoReducido: any[] = [];
    this.carrito.forEach((seleccion) => {
      const index = carritoReducido.findIndex((item) => item.producto.id === seleccion.articulo.id);
      if (index !== -1) {
        carritoReducido[index].cantidad++;
      } else {
        carritoReducido.push(new SeleccionClass(seleccion.articulo, 1));
      }
    });

    return carritoReducido;
  }

 
}
