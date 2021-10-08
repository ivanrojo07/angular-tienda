import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, Validators.email, Validators.required],
    password: [null, Validators.required, Validators.minLength(6), Validators.maxLength(16)],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    console.log(this.loginForm);
  }
}
