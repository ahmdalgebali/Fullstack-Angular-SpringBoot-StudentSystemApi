import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  StudentGroup: FormGroup;
  id: number;
  myStudent: Student = new Student(0,"","","","","");

  constructor(private formBuilder: FormBuilder,
    private studentService:StudentService , 
    private router:Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      //this.id = +this.route.snapshot.paramMap.get('id');
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      if(this.id != 0){
        this.studentService.getStudent(this.id).subscribe(
          response => 
            this.myStudent = response,
        )
      }



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
      const stu =new Student(this.id,this.getfullName(),this.getAge(),this.getAddress(),this.getPhoneNumber(),this.getGender())
      if (this.id == 0) {
        this.studentService.addStudent(stu).subscribe(
          Response =>{this.router.navigateByUrl('/students')
         // ,alert("added successfully")
        });
      } else {
        this.studentService.editStudent(stu,this.id).subscribe(
          Response =>{this.router.navigateByUrl('/students')
        });
      }

      //console.log(this.getfullName());
  }
}
