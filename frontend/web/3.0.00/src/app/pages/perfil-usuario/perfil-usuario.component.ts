import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  currentUser: any;
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      user =>{
        this.currentUser = user;
        console.log('Usuario Obtenido: ', user);
      }
    );
  }
}
