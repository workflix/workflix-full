import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  standalone:true,
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  title: string = "List the users";
  test: string = "This is a test";

  trackById(index: number, user: User): number {
    return user.id;
  }

  users: User[] = [];

  constructor(private userService: UserService,
              private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => this.users = users
    );
  }

}


