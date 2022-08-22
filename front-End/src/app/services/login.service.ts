import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { /* TODO document why this constructor is empty */  }

  Login(userName:string,password:string){
    if(userName =='abogabal701' && password =='Ahmed701@#'){
      sessionStorage.setItem("isRegister",userName);
      return true;
   }
    return false;
  }
  
  isLogin(){
    return !(sessionStorage.getItem("isRegister") == null);
  }

  logOut(){
    sessionStorage.removeItem("isRegister");
  }
}
