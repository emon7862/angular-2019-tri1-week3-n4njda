import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.class';

@Component({
    selector: 'my-app-pages-auth-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {

    user: User;

    constructor(private router: Router) {
    }

    ngOnInit() {
      this.setupNewUser();
    }

    setupNewUser() {
      this.user = new User();
    }

    onSubmit() {
        alert("Submitted!");
        
        this.setupNewUser();

        // this.router.navigate(['/dashboard']);
    }

}