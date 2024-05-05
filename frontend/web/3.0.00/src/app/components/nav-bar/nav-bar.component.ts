import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollingService } from '../../services/scrolling.service';

import { Router } from '@angular/router';
import { IngresarComponent } from '../../pages/ingresar/ingresar.component';
import { QuienesSomosComponent } from '../../pages/quienes-somos/quienes-somos.component';
import { RouterModule} from '@angular/router';
import { ContactoComponent } from '../../pages/contacto/contacto.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [QuienesSomosComponent,
            RouterModule,
            IngresarComponent,
            ContactoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  buscarTerm!: string;
  buscarResults!: any[];
  showResults: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scrollingService: ScrollingService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  buscarProfesional(termino: string){ // barra búsqueda

    if (termino.length < 1) { // para que funcione sólo si escribe al menos una letra
      return;
    }

    this.router.navigate(['/busqueda', termino])
    console.log(termino); // muestra en consola el término buscado

  }

  onClickEnlace() {
    this.scrollingService.scrollToTop();
  }
}
