import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../../students/model/student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getStudents(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/students');
  }

  saveChanges(student: Student) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + student.id, student)
      .subscribe({ next: data => { student.id = data.id; } });
    alert("Student saved!");
    this.serviceMethod();
  }

  deleteStudent(idStudent: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/students/' + idStudent)
      .subscribe({ next: data => { } });
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
