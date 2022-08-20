import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.Router.navigate(['login'])
  }
  goToHome(){
    this.Router.navigate(['home'])

  }

}
