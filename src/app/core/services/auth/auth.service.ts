import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  registerUser(email:string,password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  loginUser(email:string,password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
    return this.angularFireAuth.signOut();
  }

  hasUser(){
    return this.angularFireAuth.authState
  }
}
