import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-model-usage',
  templateUrl: './user-model-usage.component.html',
  styleUrls: ['./user-model-usage.component.css']
})
export class UserModelUsageComponent implements OnInit {
  users: User[] = [
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
