import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../../students/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/students');
  }

  saveChanges(student: Student) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + student.id, student).subscribe({
      next: data => {
        student.id = data.id;
        alert("Student saved!");
        window.location.reload();
      }
    });
  }

  deleteStudent(idStudent: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + idStudent).subscribe({
      next: data => {
        alert("Student deleted!");
        window.location.reload();
      }
    });
  }

  addStudent(student: Student) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/', student).subscribe({
      next: data => {
        student.id = data.id;
        alert("Student registered!");
      }
    });
  }
}
