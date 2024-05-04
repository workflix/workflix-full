import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

import { MatDialogRef } from '@angular/material/dialog';


@Component({
  standalone: true,
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {

  @Input() contenidoModal: string = ''; // Inicialización por defecto

  @ViewChild('contenidoModal') contenidoModalRef?: TemplateRef<any>; // Añade el signo de interrogación aquí

  constructor(private dialogRef: MatDialogRef<TerminosComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(); // Cierra el modal
  }

}