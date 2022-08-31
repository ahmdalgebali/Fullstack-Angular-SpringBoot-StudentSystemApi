import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private urlstudents=`http://localhost:8080/system/students`;
  constructor(private httpStudent:HttpClient) { }

  getStudents(page:number,size:number):Observable<Student[]> {
    return this.httpStudent.get<Student[]>(this.urlstudents+ `?page=${page}&size=${size}`).pipe(
      map(Response=>Response)
    );
  }
  removeStudent(id: number){
    //return this.httpStudent.delete(this.urlStudents + "?id=" + id)
    return this.httpStudent.delete(this.urlstudents + `?id=${id}`)
  }
  addStudent(student: Student){
    return this.httpStudent.post(this.urlstudents,student);
  }
  getStudent(id: number): Observable<Student>{
    return this.httpStudent.get<Student>(`http://localhost:8080/system/student?id=${id}`).pipe(
      map(response => response)
    );
  }

  editStudent(student: Student,id: number){
    return this.httpStudent.put(this.urlstudents + `?id=${id}` , student);
  }

  getStudentByName(name: string): Observable<Student[]>{
    return this.httpStudent.get<Student[]>(this.urlstudents + `/searchname?fullname=${name}`).pipe(
      map(response => response)
    )
  }

  getStudentsSize(): Observable<number> {
    return this.httpStudent.get<number>(this.urlstudents + `/length`).pipe(
      map(response => response)
    );
  }


  // getStudentSizeByName(name: string): Observable<number>{
  //   return this.httpStudent.get<number>(this.urlstudents + `/lengthname?name=${name}`).pipe(
  //     map(response => response)
  //   );
  // }


}



