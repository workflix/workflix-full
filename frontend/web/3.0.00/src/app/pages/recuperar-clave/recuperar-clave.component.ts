import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
  myForm: FormGroup

  constructor (private fb:FormBuilder, private router: Router){
    this.myForm = this.fb.group({
      user: ['']
    });
  }
  reset(){
    console.log(this.myForm?.value)
  }
  volver(){
    this.router.navigate(['/ingresar'])
  }
}
