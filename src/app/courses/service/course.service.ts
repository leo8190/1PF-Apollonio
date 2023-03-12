import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../model/course.model';
import { Subject } from 'rxjs';

@Injectable(
)
export class CourseService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses');
  }

  deleteCourse(idCourse: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + idCourse)
      .subscribe({ next: data => { } });
  }

  saveChanges(course: Course) {
    this.http.put<Course>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + course.id, course).subscribe({});
    alert("Course saved!");
    this.serviceMethod();
  }

  addCourse(course: Course) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/', course).subscribe({
      next: data => {
        course.id = data.id;
        alert("Course added!");
      }
    });
  }
}
