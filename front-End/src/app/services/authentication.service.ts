import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATION, TOKEN } from '../app.constance';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent:HttpClient) { }

  executeAuthentication(username: string , password: string){
 let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpStudent.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:header}).pipe(
      map(
        response => {
          console.log(response.message)
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          sessionStorage.setItem(`${TOKEN}`,basicAuthHeaderString);
          return response;
        }
      )
    ); 
  }

  getAuthentication(): any{
    return sessionStorage.getItem(`${AUTHENTICATION}`);
  }
  getToken(): any{
    if(this.getAuthentication()){
      return sessionStorage.getItem(`${TOKEN}`);
    }
  }
  isLogin(){
    return !(sessionStorage.getItem(`${AUTHENTICATION}`) == null);
  }

  logOut(){
    sessionStorage.removeItem(`${AUTHENTICATION}`);
    sessionStorage.removeItem(`${TOKEN}`);
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