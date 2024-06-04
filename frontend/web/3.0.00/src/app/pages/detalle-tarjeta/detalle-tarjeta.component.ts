import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { SelectedUserService } from '../../services/selected-user.service';


@Component({
  selector: 'app-detalle-tarjeta',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detalle-tarjeta.component.html',
  styleUrl: './detalle-tarjeta.component.css'
})

export class DetalleTarjeta implements OnInit {
  @Input() profesional: User | null = null;
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private selectedUserService: SelectedUserService
  ) {}

  ngOnInit(): void {
    this.profesional = this.selectedUserService.selectedUser;
    console.log('Profesional recibido:', this.profesional);
  }

  btnVolver() {
    this.router.navigate(['/home']);
  }

  contratar() {
    // Lógica para dirigir a la pasarela de pago
    this.router.navigate(['/pasarela-pago']);
  }

  getUserImage(profesional: User): string {
    return profesional.foto ? `http://localhost:8080${profesional.foto}` : 'assets/images/sin_foto.webp';
  }
  generateStars(recomendacion: any): string[] {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      stars.push(i < recomendacion ? 'fas fa-star' : 'fa-regular fa-star');
    }
    return stars;
  }

}
