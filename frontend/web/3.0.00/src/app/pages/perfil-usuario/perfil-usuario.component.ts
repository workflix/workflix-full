import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})

export class PerfilUsuarioComponent implements OnInit {


  currentUser: User | null = null;
  perfilForm: FormGroup;
  usuario?: User;
  error: string = '';
  currentUserId = "";
  formCompleted: boolean = false;
  selectedFile: File | null = null;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.perfilForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      mail: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      adress: ['', [Validators.required, Validators.maxLength(40)]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      tipo_usuario: [false],
    });

    this.perfilForm.valueChanges.subscribe(() => {
      this.checkFormCompletion();
    });

  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if (!this.selectedFile) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8080/usuarios/upload/'+this.currentUser?.id, formData)
      .subscribe(
        (response) => {
          console.log('Imagen subida exitosamente:', response);
        },
        (error) => {
          console.error('Error al cargar la imagen:', error);
        }
      );
  }

  ngOnInit(): void {
    console.log('Inicializando componente');
    this.loginService.getCurrentUser().subscribe(user => {
      if (user){
      this.currentUser = user;
      console.log('Usuario Obtenido', user);
      this.usuario = user;

      this.perfilForm.patchValue({
        nombre: user.nombre,
        apellido: user.apellido,
        mail: user.correo,
        adress: user.direccion,
        phone: user.telefono,
        tipo_usuario: user.tipo_usuario === 'profesional'
      });
      this.checkFormCompletion();
    }
    });
  }

  checkFormCompletion(): void {
    this.formCompleted = this.perfilForm.valid;
  }

  onSubmit(formData: any): void {
    this.checkFormCompletion();
    console.log('Estado del formulario:', this.perfilForm.valid);
    console.log('Valores del formulario:', this.perfilForm.value);
    if (this.currentUser) {
      if (this.formCompleted && this.perfilForm.valid) {


        const newUserData = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.mail,
          direccion: formData.adress,
          telefono: formData.phone,
          tipoUsuario: formData.tipo_usuario ? 'profesional' : this.currentUser.tipoUsuario,

        };


        this.userService.updateUserProfile(this.currentUser.id, newUserData).subscribe(
          response => {
            if (this.currentUser) {
              this.currentUser.nombre = newUserData.nombre;
              this.currentUser.apellido = newUserData.apellido;
              this.currentUser.correo = newUserData.correo;
              this.currentUser.direccion = newUserData.direccion;
              this.currentUser.telefono = newUserData.telefono;
              this.currentUser.tipoUsuario = newUserData.tipoUsuario;


          }
          console.log('Perfil actualizado con éxito:', response);
          alert ('Los datos han sido actualizados correctamente');

        },
          error => {
            console.error('Error al actualizar el perfil:', error);
          }
        );
      } else {
        console.error('Formulario inválido. Revise los campos.');
        alert ('debe completar todos los campos del formulario')
      }
    } else {
      console.error('No hay un usuario actual.');
    }
  }

  deleteUser(): void {
    if (this.currentUser) {
      this.userService.deleteUser(this.currentUser.id).subscribe(
        (resultData: any) => {
          this.router.navigate(['/ingresar']);
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    } else {
      console.error('No se puede eliminar el usuario porque no hay un usuario actual.');
    }
  }

}
