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
  message:String;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudent();

  }

  getStudent(){
    this.studentService.getStudents().subscribe(
      data =>this.students = data
    );

  }

  removeStudent(id: number){
    const index = this.students.findIndex(student => student.id == id);
    
    this.studentService.removeStudent(id).subscribe(
      Response =>{
        this.students.splice(index,1),
        this.message=`Deleted successfully id ${id}`,
        this.showMessage()
      }
    );
  }

  showMessage(){
    setTimeout(() => {
      this.message = ""
    },3000)
  }







}
