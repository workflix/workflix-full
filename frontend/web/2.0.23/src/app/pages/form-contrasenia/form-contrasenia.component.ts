import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contrasenia',
  templateUrl: './form-contrasenia.component.html',
  styleUrls: ['./form-contrasenia.component.css']
})
export class FormContraseniaComponent {

  myForm: FormGroup
  //private fb:FormBuilder = new FormBuilder()
  constructor (private fb:FormBuilder, private router: Router){
    this.myForm = this.fb.group({
      usuario: ['']
    });
  }
  reset(){
    console.log(this.myForm.value) // imprime en consola lo que completó el usuario
  }

  volver(){
    this.router.navigate(['/login'])
  }
}
