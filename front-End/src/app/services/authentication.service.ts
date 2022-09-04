import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent:HttpClient) { }

  executeAuthentication(username: string , password: string):Observable<string> {
    
 let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authentication: basicAuthHeaderString
    })

    return this.httpStudent.get<string>("http://localhost:8080/basicauth",{headers:header});
     
      }
}
