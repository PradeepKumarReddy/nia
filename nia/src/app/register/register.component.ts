import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserRegister, User } from '../_models/index';
import { RegisterService } from '../_services/index';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel : UserRegister;
  markReadonly: boolean = false;
  registerSuccess: boolean = false;
  registrationId: string;
  signupUser: User;
  confirm_password: string;

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerModel = new UserRegister();
    this.signupUser = new User();
  }

  register() {
    console.log(this.registerModel);
    
    this.registerService.createRegisterUser(this.registerModel).subscribe(
      (userRegister : UserRegister) => {
       console.log(userRegister);
       this.registerModel = userRegister},
      err => console.error(err),
      () => console.log('registeration successful')
    );

    
    setTimeout( () => {this.registerService.getRegisterUser(this.registerModel.id).subscribe(
     (userRegister : UserRegister) => {
       console.log(userRegister);
       this.registerModel = userRegister;
       this.signupUser.username = this.registerModel.registrationId;
      console.log(this.registrationId);
      this.registerSuccess = true;
      this.registerModel = new UserRegister();

       },      
      err => console.error(err),
      () => console.log('registeration successful')
    );}, 500);
    //console.log("after rest call");
    //console.log(this.registerModel);
    
  }

  gotoLogin() {
     this.router.navigate(['login']);
  }

  signup() {
    this.registerService.signup(this.signupUser)
    .subscribe(
      (res) => {
       console.log(res);
      },
      err => console.error(err),
      () => console.log('signup successful')
    );
  }

  copyResidentialAddress(event : any) {
    //console.log(event.srcElement.checked);  
    if (event.srcElement.checked) {
      this.registerModel.permanentAddress = this.registerModel.residentialAddress;
      this.registerModel.permanentState = this.registerModel.residentialState;
      this.registerModel.permanentPincode = this.registerModel.residentialPincode;
      this.markReadonly = true;
    } else {
      this.registerModel.permanentAddress = '';
      this.registerModel.permanentState = '';
      this.registerModel.permanentPincode = '';
      this.markReadonly = false;
    }
  }

}
