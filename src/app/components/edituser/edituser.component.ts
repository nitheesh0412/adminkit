import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserdataService } from 'src/app/services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  currentUser: User = {
    id: 0,
    username: "",
    email: "",
    age : 0,
    mobile : 0,
    password: ""
  };
  userData : FormGroup;
  flag : boolean = false;
  users: User[] = this._usersdataservice.usersData;
  constructor(private _usersdataservice: UserdataService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router : Router) {
    this.userData = this.fb.group({
      username : "",
      password : ""
    })
  }

  ngOnInit(): void {
    this.userData = this.fb.group({
      username : ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)

      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]]
    })
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params)
      let userIdx = this.users.findIndex((u) => u.id == params['userid']);
      this.currentUser = this._usersdataservice.usersData[userIdx];
    })
    // console.log(this.currentUser);
  }
  
  editUser  (userData : FormGroup) {
    this.activatedRoute.params.subscribe((params) => {
      let userIdx : number = this.users.findIndex((u) => u.id == params['userid']);
      console.log(userData.get('password')?.value)
      console.log(this.currentUser.password)
      this.currentUser = this._usersdataservice.usersData[userIdx];
      if(String(userData.get('password')?.value) === this.currentUser.password){
        
        this.flag= true;
        this._usersdataservice.usersData[userIdx].username = this.userData.value.username;
        
      }

    })
  }
  gotoprofile(){
    this.router.navigate(['/users/view/',this.currentUser.id]);
  }
}
