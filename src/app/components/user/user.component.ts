import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  currentUser : User;
  users : User[] = this._usersdataservice.usersData;
  constructor (private _usersdataservice : UserdataService,
  public activatedRoute : ActivatedRoute ){
    this.currentUser = {
      id : 0,
      username : "",
      email : "",
      age : 0,
      mobile : 0,
      password : ""
    }
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params)
      let userIdx = this.users.findIndex((u)=> u.id == params['userId']);
      this.currentUser = this._usersdataservice.usersData[userIdx];
    })
    console.log(this.currentUser)
  }
  

  
}
