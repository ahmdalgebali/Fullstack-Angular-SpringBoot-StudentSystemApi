import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService,
              private route: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  isAuthenticaterUser(){
    return this.loginService.isLogin();
  }

  logOut(){
    this.loginService.logOut();
    this.route.navigateByUrl('register');

  }

}
