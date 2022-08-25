import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  StudentGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private studentService:StudentService , 
    private router:Router) { }

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


  getfullName(){
    return this.StudentGroup.get("student")?.value.fullName
  }
  getAge(){
    return this.StudentGroup.get("student")?.value.Age
  }
  getAddress(){
    return this.StudentGroup.get("student")?.value.Address
  }
  getPhoneNumber(){
    return this.StudentGroup.get("student")?.value.phoneNumber
  }
  getGender(){
    return this.StudentGroup.get("student")?.value.gender
  }
  
  Done() {
      const stu =new Student(-1,this.getfullName(),this.getAge(),this.getAddress(),this.getPhoneNumber(),this.getGender())
      this.studentService.addStudent(stu).subscribe(
        Response =>{this.router.navigateByUrl('/students')
       // ,alert("added successfully")
      }

      );
      console.log(this.getfullName());
      console.log(this.getAge());
      console.log(this.getAddress());
      console.log(this.getPhoneNumber());
      console.log(this.getGender())
  }
}
