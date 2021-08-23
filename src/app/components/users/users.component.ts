import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/shared/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = users

  constructor() { }

  ngOnInit(): void {
     
  }

}
