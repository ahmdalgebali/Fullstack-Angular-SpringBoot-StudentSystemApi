import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Auth:AuthenticationService,
              private route: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  isAuthenticaterUser(){
    return this.Auth.isLogin();
  }

  logOut(){
    this.Auth.logOut();
    this.route.navigateByUrl('register');

  }
  
  done(name: String) {
    this.route.navigateByUrl(`students/${name}`)
  }
}
