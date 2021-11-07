import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
                username: ['', [Validators.required]],
                password: ['', [Validators.required]],
            }
        );
    }

    login() {
        const username =  this.form.value.username;
        const password = this.form.value.password;


        //Basic auth. Width Hard code data.
        if( username == 'admin' && password == 'admin'){
            this.router.navigateByUrl('/dashboard');
        }else {
            this.openSnackBar()
        }
    }

    openSnackBar() {
        this._snackBar.open("Wrong credentials, Try again!", "Try", {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            
        });
    }
}
