import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {  
  title: string = "List the users";
  test: string = "This is a test to my student component";

  trackById(index: number, user: User): number {
    return user.id;
  }
  
  users: User[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => this.users = users
    );
  }
}
