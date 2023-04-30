import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  roles = ["role1"]; //hedheya array fi wostou roles aaml fct getRoles tejbedlik roles mel base
  selectedRole : String = "hedhia badalha type role baad ma taaml model role w aamleleha initialisation "
  formSignUp:FormGroup;
  submited=false;
  errorMessage='';
  constructor(private router: Router,
    private authService:AuthService,
    private fb: FormBuilder) {
      this.formSignUp = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
       // role: ['', Validators.required],
      });
    }

  submit() {
    this.submited = true;
    if(this.formSignUp.valid){
   
    var payload = {
      ...this.formSignUp.value,
      role:['user'],
    };
    this.authService.signUp(payload).subscribe(data=>{
this.router.navigate(['/authentication/login']);
    },
    error=>{
      this.errorMessage=error.error.message;
      alert(this.errorMessage); 
  }
  )
  }
}
}
