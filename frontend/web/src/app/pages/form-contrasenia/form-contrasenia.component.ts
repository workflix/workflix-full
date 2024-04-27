import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contrasenia',
  templateUrl: './form-contrasenia.component.html',
  styleUrls: ['./form-contrasenia.component.css']
})
export class FormContraseniaComponent {

  myForm: FormGroup
  //private fb:FormBuilder = new FormBuilder()
  constructor (private fb:FormBuilder){
    this.myForm = this.fb.group({
      usuario: [""]
    })
  }
}
