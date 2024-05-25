import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-create',
  standalone: true,
  imports: [RouterModule, CommonModule ],
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css'
})
export class ServiceCreateComponent {

  serviceArray : any[] = [];
  error: string = '';
  alertMessage: string = '';
  alertType: string = '';

  nombre : string ="";
  editingMode: number = 0;
  currentServiceId = "";

  constructor(private http: HttpClient, private router: Router, private serviceService: ServiceService)
  {

  }

  onSubmit(nombre: string): void  {
    if(nombre){
      this.showAlert('Servicio creado correctamente', 'success');
      this.serviceService.createService(nombre).subscribe(
        response => {
          console.log('Registro exitoso de servicio:', response);
          this.clearFieldsService();
          this.showAlert('Servicio creado correctamente', 'success');
        },
        error => {
          console.error('No se pudo registrar correctamente:', error);
          // this.showAlert('No se pudo registrar correctamente', 'danger');
        }
      );
    }else{
      this.error = 'Debe completar todos los campos';
      // this.showAlert('Debe completar todos los campos', 'warning');
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
          this.showAlert('Servicio creado correctamente', 'success');
        },
        error => {
          console.error('No se pudo actualizar correctamente:', error);
          this.showAlert('No se pudo registrar correctamente', 'danger');
        }
      );
    }else {
      this.error = 'Debe completar todos los campos';
      this.showAlert('Debe completar todos los campos', 'warning');
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
 showAlert(message: string, type: string): void {
  this.alertMessage = message;
  this.alertType = type;
}
}
