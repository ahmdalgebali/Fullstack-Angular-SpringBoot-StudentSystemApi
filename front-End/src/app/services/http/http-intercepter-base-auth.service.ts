import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthService implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userName = "abogabal701";
    let password = "Ahmed701@#";
    let basicAuthHeaderString = "Basic " + window.btoa(userName + ":" + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })

    return next.handle(request);
  }
}
