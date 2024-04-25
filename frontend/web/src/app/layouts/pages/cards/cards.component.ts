import { Component, OnInit } from '@angular/core';
import { User } from '../../../modelos/user';
import { UserService } from '../../../servicios/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  tittle:string="List the users"
  test: string = "This is a test to my studen component"
  
  trackById(index: number, user: User): number {
    return user.id; // o cualquier propiedad única de user
  }
  
  users:User[]=[];
  constructor(private userService:UserService){}

  
  ngOnInit(): void {
   this.userService.getAllUsers().subscribe(
    e  => this.users = e
   )
  }
}
