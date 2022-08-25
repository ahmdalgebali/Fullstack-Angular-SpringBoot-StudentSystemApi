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

  getStudents():Observable<Student[]> {
    return this.httpStudent.get<Student[]>(this.urlstudents).pipe(
      map(Response=>Response)
    )
  }

  /*old handeling
  getStudents():Observable<Student[]> {
    return this.httpStudent.get<GetResponseStudent>(this.urlstudents).pipe(
      map(Response=>Response._embedded.students)
    )
  }*/
  removeStudent(id: number){
    //return this.httpStudent.delete(this.urlStudents + "?id=" + id)
    return this.httpStudent.delete(this.urlstudents + `?id=${id}`)
  }



}

/*old api server
interface GetResponseStudent {
  _embedded:{
    students:Student[]
  }
}
*/

