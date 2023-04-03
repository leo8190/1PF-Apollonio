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

  deleteCourse(idCourse: number): Observable<Course> {
    let deletedCourse = this.http.delete<Course>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + idCourse);
    deletedCourse.subscribe({ next: data => { } });
    return deletedCourse;
  }

  saveChanges(course: Course): Observable<Course> {
    let savedCourse = this.http.put<Course>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + course.id, course);
    savedCourse.subscribe({});
    alert("Course saved!");
    this.serviceMethod();
    return savedCourse;
  }

  addCourse(course: Course): Observable<Course> {
    let addedCourse = this.http.post<Course>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/', course);

    addedCourse.subscribe({
      next: data => {
        course.id = data.id;
        alert("Course added!");
      }
    });

    return addedCourse;
  }
}
