import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../../services/service.service';


@Component({
  selector: 'app-service-create',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css'
})
export class ServiceCreateComponent {

  serviceArray : any[] = [];
  error: string = '';
  
  nombre : string ="";

  constructor(private http: HttpClient, private router: Router, private serviceService: ServiceService)
  {

  }

  onSubmit(nombre: string): void  {
    if (!nombre) {
      this.error = 'Por favor ingresa el nombre del servicio';
      return;
    }

    }
}
