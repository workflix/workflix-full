import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/modelos/modelo.producto';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { Seleccion } from 'src/app/modelos/modelo.seleccion';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [ ImagenesService ]
})
export class ServiciosComponent {
  cantidadEstrellas: number;
  @Input() producto?: Producto;
  @Input() imagen: string;

  private _seleccion?: Seleccion;
  @Input() set seleccion(valor: Seleccion | undefined) {
    this.producto = valor?.articulo;
    this._seleccion = valor;
  }
  get seleccion(): Seleccion | undefined {
    return this._seleccion;
  }

  constructor(private imagenesService: ImagenesService, ) {
    this.producto = undefined;
    this.seleccion = undefined;
    this.imagen = "";
    this.cantidadEstrellas = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit(): void {
    if (this.producto) {
      this.imagenesService.obtenerImagen(this.producto.imagen)
        .subscribe(blob => {
          this.imagen = URL.createObjectURL(blob);
        })
      }
  }
}
