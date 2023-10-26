import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import * as feather from 'feather-icons';
import { AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {


  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    feather.replace();
  }

  constructor(private _userdataService:UserdataService){

  }
  users : User[] =this._userdataService.usersData;
}
