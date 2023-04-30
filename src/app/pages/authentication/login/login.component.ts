import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  formSignIn:FormGroup;
  submited=false;
  errorMessage='';
  constructor( private fb: FormBuilder,
    private authService:AuthService,
    private router:Router) {
      this.formSignIn = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });

    }

    submit(){
      this.submited = true;
      if(this.formSignIn.valid){
     
      var payload = {
        ...this.formSignIn.value,
        role:['user'],
      };
      this.authService.SignIn(payload).subscribe(data=>{
this.router.navigate(['user/home']);
      },
      error=>{
        this.errorMessage=error.error;
        alert(this.errorMessage); 
      
    }
    )
    }
    }
}
