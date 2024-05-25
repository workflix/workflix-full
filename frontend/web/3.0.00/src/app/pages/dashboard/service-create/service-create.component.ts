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
  editingMode: number = 0;
  currentServiceId = "";

  constructor(private http: HttpClient, private router: Router, private serviceService: ServiceService)
  {

  }

  onSubmit(nombre: string): void  {
    if(nombre){
      this.serviceService.createService(nombre).subscribe(
        response => {
          console.log('Registro exitoso de servicio:', response);
          this.clearFieldsService();
          this.router.navigate(['/dashboard'])
        },
        error => {
          console.error('No se pudo registrar correctamente:', error);
        }
      );
    }else{
      this.error = 'Debe completar todos los campos';
    }
  }

  onSubmitUpdate(nombre: string): void {
    if (nombre) {
      const bodyData = {
        nombre: nombre,
      };

      this.serviceService.updateService(+this.currentServiceId, bodyData).subscribe(
        response => {
          console.log ('Actualización exitosa:', response);
          this.clearFieldsService();
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('No se pudo actualizar correctamente:', error);
        }
      );
    }else {
      this.error = 'Debe completar todos los campos';
    }
 }

 ngOnInit() {
  const serviceData = history.state.data;
  if(serviceData){
    this.nombre = serviceData.nombre;
    this.currentServiceId = serviceData.id;
    this.editingMode = 1;
  }else{
    console.log('ERROR RECEIVING DATA')
  }
 }

 validations(){
  if (!this.nombre) {
    this.clearFieldsService();
    return;
  }

  if (this.nombre.length < 2){
    this.clearFieldsService();
    return;
  }
 }

 clearFieldsService(){
  this.nombre = '';
 }

}
