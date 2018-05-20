import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    registerModel : any = {};
    loading = false;
    error = '';
    showRegister: boolean = false;
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

    register() {
        console.log(this.registerModel.username);
        console.log(this.registerModel.password);
        console.log(this.registerModel.email);
        console.log(this.registerModel.confirm_password);
    }
    goRegister() {
        //console.log("showRegister");
        this.showRegister = true;
    }

    goLogin() {
        //console.log("showLogin");
        this.showRegister = false;
    }
}
