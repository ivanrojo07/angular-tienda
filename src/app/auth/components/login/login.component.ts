import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = this.fb.group({
    email: [null, [ Validators.email, Validators.required]],
    password: [null, [ Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

 

  loginSubmit(){
    if(this.loginForm.valid){
      let values = this.loginForm.value;
      this.authService.loginUser(values.email,values.password).then(response=>{
        // console.log(response);
        this.router.navigateByUrl('/admin');
      }).catch(error=>{
        console.log(error)
        alert('error de credenciales')
      });
    }
    console.log(this.loginForm);
  }
}
