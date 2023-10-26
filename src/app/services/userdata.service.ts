import { Injectable, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { User } from '../models/user';
@Injectable()
export class UserdataService {
  private _usersData: Array<User> = [];
  constructor() {
    this._usersData = [{
      id: 1,
      username: "nitheesh",
      email: "nitheesh@gmail.com",
      age : 20,
      mobile : 8348898989,
      password: "nani1234"
    },
    {
      id: 2,
      username: "nsharath",
      email: "nitheesh@gmail.com",
      age : 21,
      mobile : 9999999999,
      password: "nani1234"
    }]
  }

  createUser(user: User) {
    user.id = this._usersData?.length + 1
    this.usersData = user;
    console.log(this._usersData);
    
  }

  set usersData(user: User) {
    this._usersData.push(user);
  }

  get usersData(): User[] {
    return this._usersData;
  }
}
