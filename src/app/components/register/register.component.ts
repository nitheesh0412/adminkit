import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData: FormGroup;
  constructor(public _userdataService: UserdataService,
    private router : Router) {
    this.userData = new FormGroup(
      {
        'username': new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)

        ]),
        'email': new FormControl('', [
          Validators.required,
          Validators.email

        ]),
        'password': new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        'age' : new FormControl('',[
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]),
        'mobile' : new FormControl('',[
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])

      },
      {
        //validation functions
      }
    )
  }
  createUser() {
    const id = this._userdataService.usersData.length;
    this._userdataService.createUser(this.userData.value);
    console.log(this._userdataService.usersData);
    this.router.navigate(['/users'])
  }
}
