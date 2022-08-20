import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ="";
  password ="";
  errorMsg = "";

  constructor( private auth:AuthService , private Router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if (this.username.trim().length === 0 && this.password.trim().length === 0 ){
      this.errorMsg = "username and password is required";
    } else if (this.password.trim().length === 0 ){
      this.errorMsg = "password is required";
    }else if (this.username.trim().length === 0 ){
      this.errorMsg = "username is required";
    }
    else{
      this.errorMsg = "";
      let res = this.auth.login(this.username , this.password);
      if(res === 200){
        this.Router.navigate(['home'])
      }
      if(res === 403){
        this.errorMsg = "Invalid Credentials ";
      }
    }
  }
}
