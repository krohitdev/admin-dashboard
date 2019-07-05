import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Operations } from '../../../operations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Operations implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public userService: UserService
  ) { 
    super();
    
  }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  Login(){
    
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.userService.login(this.loginForm.value).subscribe(data => {
        if(data.statusCode == 200){
          localStorage.setItem('token', data.body.token);
          localStorage.setItem('username', data.body.data.firstName +  data.body.data.lastName);
          this.router.navigate(['/']);
        }
      },
      err => {       
        let error;
        let message;
        error = err.error.body.error.description;
        alert(error);
      }
    );
  }

}
