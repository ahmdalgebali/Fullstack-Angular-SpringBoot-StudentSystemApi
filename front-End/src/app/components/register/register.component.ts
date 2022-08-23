import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logInFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    });
  }


  get userName(){
    return this.logInFormGroup.get('admin.userName')
  }
  get password(){
    return this.logInFormGroup.get('admin.password')
  }

  
  OnSubmit() {
    this.loginService.Login(this.userName?.value,this.password?.value)
      // console.log(this.userName?.value)
      // console.log(this.password?.value)
  }





}
