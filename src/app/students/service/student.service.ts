import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../model/student.model';
import { Subject } from 'rxjs';

@Injectable(
)
export class StudentService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students');
  }

  deleteStudent(idStudent: number): Observable<Student> {
    let deletedStudent = this.http.delete<Student>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + idStudent);
    deletedStudent.subscribe({ next: data => { } });
    return deletedStudent;
  }

  saveChanges(student: Student): Observable<Student> {
    let savedStudent = this.http.put<Student>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + student.id, student);
    savedStudent.subscribe({});
    alert("Student saved!");
    this.serviceMethod();
    return savedStudent;
  }

  addStudent(student: Student): Observable<Student> {
    let addedStudent = this.http.post<Student>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/', student);

    addedStudent.subscribe({
      next: data => {
        student.id = data.id;
        alert("Student added!");
      }
    });

    return addedStudent;
  }
}
