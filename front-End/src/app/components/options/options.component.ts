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
  invalidFullName: String;
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
          response => {
            this.myStudent = response,
              this.StudentGroup.get("student.fullName")?.patchValue(response.fullName),
              this.StudentGroup.get("student.age")?.patchValue(response.age),
              this.StudentGroup.get("student.address")?.patchValue(response.address),
              this.StudentGroup.get("student.phone")?.patchValue(response.phone),
              this.StudentGroup.get("student.gender")?.patchValue(response.gender)
          }
        )
      }

    this.StudentGroup = this.formBuilder.group({
      student: this.formBuilder.group({
        fullName: [''],
        age: [''],
        address: [''],
        phone: [''],
        gender: ['MALE']
      })
    });
  }

  getFullName(){
    return this.StudentGroup.get("student")?.value.fullName
  }
  getAge(){
    return this.StudentGroup.get("student")?.value.age
  }
  getAddress(){
    return this.StudentGroup.get("student")?.value.address
  }
  getPhone(){
    return this.StudentGroup.get("student")?.value.phone
  }
  getGender(){
    return this.StudentGroup.get("student")?.value.gender
  }
  
  Done() {
      const stu =new Student(this.id,this.getFullName(),this.getAge(),this.getAddress(),this.getPhone(),this.getGender())
      if (this.id == 0) {
        this.studentService.addStudent(stu).subscribe(
          Response =>{this.router.navigateByUrl('/students')
         // ,alert("added successfully")
        },
        error => {
          this.invalidFullName = "Full Name alerdy Exist";
          this.showMessage()
        }
        );
      } else {
        this.studentService.editStudent(stu,this.id).subscribe(
          Response =>{this.router.navigateByUrl('/students')
        });
      }

      //console.log(this.getfullName());
  }

  showMessage() {
    setTimeout(() => {
      this.invalidFullName = ""
    }, 3000)
  }


  
}
