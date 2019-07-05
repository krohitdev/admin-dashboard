import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  items:any;
  constructor(public userService:UsersService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers(){
    this.userService.GetAllUsers().subscribe(data=>{
      this.items = data.body.data.data;
    },
    err =>{
      let error;
      let message;
      error = err.error.body.error.description;
      console.log(error);
    });
  }

}
