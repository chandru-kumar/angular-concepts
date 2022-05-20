import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listOfUsers= [
    new User(1, "Adam"),
    new User(2, "Bob"),
    new User(3, "Chris"),
    new User(4, "David"),
    new User(5, "El")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
