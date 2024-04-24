import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoProducto, TipoProductoClass } from 'src/app/modelos/modelo.tipoProducto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ResultadoApi } from 'src/app/modelos/modelo.resultado';
import { HttpStatusCode } from '@angular/common/http';
import { FuncionesService } from 'src/app/servicios/funciones.service';

@Component({
  selector: 'app-art-servicios',
  templateUrl: './art-servicios.component.html',
  styleUrls: ['./art-servicios.component.css'],
  providers: [ProductosService, FuncionesService]
})
export class ArtServiciosComponent {
  editarItemTipoProductoForm!: FormGroup;
  editando: TipoProducto;

  @Input() tipoProducto: TipoProducto = TipoProductoClass.Nulo;
  @Input() resultado: ResultadoApi;
  @Output() refrescar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, public funcionesService: FuncionesService) {
    this.editando = TipoProductoClass.Nulo;
    this.resultado = {
      mensaje: "",
      data: {},
      status: 0 as HttpStatusCode
    };
  }

  ngOnInit(): void {
    this.editarItemTipoProductoForm = this.formBuilder.group({
      nuevoNombre: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(40)]]
    })
  }

  get nuevoNombre() { return this.editarItemTipoProductoForm.get('nuevoNombre'); }

  editar(tipoProducto: TipoProducto) {
    this.editarItemTipoProductoForm.get("nuevoNombre")?.setValue(tipoProducto.nombre);
    this.editando = tipoProducto;
  }

  borrar(tipoProducto: TipoProducto) {
    this.productosService.borrarTipo(tipoProducto)
      .subscribe({
        next: (exito: ResultadoApi) => { this.resultado = exito; this.refrescar.emit(); },
        error: (error: ResultadoApi) => { this.resultado = error; },
        complete: () => {}
      });
  }

  grabar(tipoProducto: TipoProducto, value: any) {
    this.productosService.modificarTipo(tipoProducto, value.nuevoNombre)
      .subscribe((resultado: TipoProducto) => {
        this.tipoProducto = resultado;
        this.resultado = {
          mensaje: "Tipo de producto modificado exitosamente",
          data: resultado,
          status: HttpStatusCode.Ok
        }
        this.cancelar(resultado);
      });
  }

  cancelar(tipoProducto: TipoProducto) {
    this.editando = TipoProductoClass.Nulo;
  }
}
