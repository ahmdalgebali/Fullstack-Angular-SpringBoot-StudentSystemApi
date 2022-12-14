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
    
    return this.httpStudent.post<any>(`${API_URL}/signin`,{username,password}).pipe(
    map(
      response => {
        sessionStorage.setItem(`${AUTHENTICATION}`,username);
        sessionStorage.setItem(`${TOKEN}`,`Bearer ${response.token}`);
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
