import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatedService implements CanActivate {
  constructor(private serviceLogin: LoginService,
              private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.serviceLogin.isLogin()){
      return true;
    }
    this.route.navigateByUrl('/register');
    return false;
  }


}




