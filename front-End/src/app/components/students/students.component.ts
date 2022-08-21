import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudent();

  }

  getStudent(){
    this.studentService.getStudents().subscribe(
      data =>this.students = data
    );

  }

}
