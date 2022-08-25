import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  StudentGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.StudentGroup = this.formBuilder.group({
      student: this.formBuilder.group({
        fullName: [''],
        Age: [''],
        Address: [''],
        phoneNumber: [''],
        gender: ['MALE']
      })


    });
  }


  get fullName(){
    return this.StudentGroup.get('student.fullName')
  }
  get Age(){
    return this.StudentGroup.get('student.Age')
  }
  get Address(){
    return this.StudentGroup.get('student.Address')
  }
  get phoneNumber(){
    return this.StudentGroup.get('student.phoneNumber')
  }
  get gender(){
    return this.StudentGroup.get('student.gender')
  }
  
  Done() {

      console.log(this.fullName?.value);
      console.log(this.Age?.value);
      console.log(this.Address?.value);
      console.log(this.phoneNumber?.value);
      console.log(this.gender?.value)
  }
}
