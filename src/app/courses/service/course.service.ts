import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../model/course.model';
import { BehaviorSubject } from 'rxjs';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';

@Injectable(
  //{ providedIn: 'root' }
)
export class CourseService {

  private cursos: Course[] = [{
    "createdAt": new Date(),
    "name": ".NET",
    "description": "Begginers to advanced in no time",
    "isActive": true,
    "enrolledStudents": [],
    "duration": "3 months",
    "id": 7
  }]
  // private cursos: Course[];
  private cursos$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  private clc: CoursesListComponent;

  constructor(private http: HttpClient) {
    this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses')
      .subscribe(cursos => this.cursos = cursos as Course[]);

    this.cursos$ = new BehaviorSubject(this.cursos);

  }

  ngOnInit() {
  }

  getCourses(): Observable<Course[]> {
    let courses = this.http.get<Course[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses');

    return courses;

    // return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses')
    //                             .subscribe(cursos => this.cursos = cursos as Course[]);    
  }

  deleteCourse(idCourse: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + idCourse

    ).subscribe({
      next: data => {
        // alert("Course deleted!");
        // window.location.reload();
      }
    });
  }

  saveChanges(course: Course) {
    this.http.put<Course>('https://63dd0c2fdf83d549ce996a90.mockapi.io/courses/' + course.id, course).subscribe({
      next: data => {
        alert("Course saved!");
        this.clc.refresh();
      }
    });
    this.clc.refresh();
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
