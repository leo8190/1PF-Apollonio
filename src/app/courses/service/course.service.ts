import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../model/course.model';

@Injectable(
  //{ providedIn: 'root' }
)
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/Courses');
  }

  deleteCourse(idCourse: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/Courses/' + idCourse
    
    ).subscribe({
      next: data => {
          alert("Course deleted!"); 
          window.location.reload();         
      }     
    });
  }

  saveChanges(course: Course) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/Courses/' + course.id, course).subscribe({
      next: data => {
        course.id = data.id;
          alert("Course saved!");        
          window.location.reload();
      }    
    });
  }

  addCourse(course: Course) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/Courses/', course).subscribe({
      next: data => {
          course.id = data.id;
          alert("Course added!");                  
      }    
    });
  }
}
