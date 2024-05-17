import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { DetalleTarjeta} from '../detalle-tarjeta/detalle-tarjeta.component';
import { CarritoService } from '../../services/carrito.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-tarjetas',
  standalone:true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  imports: [NavBarComponent, RouterModule, DetalleTarjeta]
})
export class TarjetasComponent implements OnInit {
  title: string = "List the users";
  test: string = "This is a test";
  currentUser: any;

  trackById(index: number, user: User): number {
    return user.id;
  }

  users: User[] = [];

  constructor(private userService: UserService,
              private route:ActivatedRoute,
              private _cartService:CarritoService,
              private router:Router,
              private loginService:LoginService
            ) {}

            ngOnInit(): void {
              this.userService.getAllUsers().subscribe(
                users => {
                  this.users = users;
                  console.log('Users:');
                  this.users.forEach(user => console.log(user));

                  this.loginService.getCurrentUser().subscribe(
                    user => {
                      this.currentUser = user;
                    }
                  );

                  if (this.users) {
                    // Asegurarse de que 'tipoUsuario' esté presente y en minúsculas
                    this.users = users.filter(user => user.tipo_usuario && user.tipo_usuario.toLowerCase() === 'profesional' && user.precio != null);
                  } else {
                    // Manejar el caso en el que no se devuelvan usuarios
                    console.log('No se encontraron usuarios.');
                  }
                },
                error => {
                  // Manejar errores de la solicitud HTTP
                  console.error('Error al obtener usuarios:', error);
                }
              );
            }

  public addCart(user: User){
    console.log('Profesional almacenado correctamente: '+user);
    this._cartService.changeCart(user);
  }

  public verDetalle(){
    this.router.navigate(['/detalle-tarjeta']);
  }

}


