import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent:HttpClient) { }

  executeAuthentication(username: string , password: string){
    
 let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authentication: basicAuthHeaderString
    })

    return this.httpStudent.get<AuthenticationBean>("http://localhost:8080/basicauth",{headers:header}).pipe(
      map(
        response => {
          sessionStorage.setItem("isRegister",username);
          //sessionStorage.setItem("token",basicAuthHeaderString);
          //sessionStorage.setItem(`${TOKEN}`,`Bearer ${response.token}`);
          return response;
        }
      )
    );
     
      }
}
export class AuthenticationBean{

  constructor(private _message: string) {
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}