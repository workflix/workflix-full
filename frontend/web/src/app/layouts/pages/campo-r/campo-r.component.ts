import { HttpStatusCode } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ResultadoApi } from 'src/app/modelos/modelo.resultado';

@Component({
  selector: 'app-campo-r',
  templateUrl: './campo-r.component.html',
  styleUrls: ['./campo-r.component.css']
})
export class CampoRComponent {
  @Input() resultado!: ResultadoApi | undefined;

  constructor() {
    setTimeout(() => {
      this.resultado = undefined;
    }, 2500);
  }

  successfulResponse(status: HttpStatusCode): boolean {
    return status >= 200 && status <= 299;
  }

  failureResponse(status: HttpStatusCode): boolean {
    return status >= 400 && status <= 599;
  }
}
