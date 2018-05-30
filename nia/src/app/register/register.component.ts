import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../_models/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel : UserDetails;

  constructor(private router: Router) { }

  ngOnInit() {
    this.registerModel = new UserDetails();
  }

  register() {
        console.log(this.registerModel);
        //UserDetails ud = new UserDetails(this.registerModel);
        //console.log(ud);
  }

  gotoLogin() {
     this.router.navigate(['login']);
  }

  copyResidentialAddress(event : any) {
    //console.log(event.srcElement.checked);  
    if (event.srcElement.checked) {
      this.registerModel.permanentAddress = this.registerModel.residentialAddress;
      this.registerModel.permanentState = this.registerModel.residentialState;
      this.registerModel.permanentPincode = this.registerModel.residentialPincode;
    } else {
      this.registerModel.permanentAddress = '';
      this.registerModel.permanentState = '';
      this.registerModel.permanentPincode = '';
    }
  }

}
