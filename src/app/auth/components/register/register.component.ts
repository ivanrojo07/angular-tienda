import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
  })
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) {

   }

 
  registerSubmit(){
    console.log(this.registerForm);
    if(this.registerForm.valid){
      let values =this.registerForm.value;
      this.authService.registerUser(values.email,values.password).then(result=>{
        // console.log(result)
        this.router.navigateByUrl('/auth/login');

      }).catch(error=>console.log(error))

    }
  }
}