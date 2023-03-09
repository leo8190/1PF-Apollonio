import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../courses/service/course.service';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/courses/model/course.model';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses!: Course[];
  dataSource!: MatTableDataSource<Course>;
  columnas: string[] = ['name', 'description', 'duration', 'actions']

  constructor(private courseService: CourseService, private dialog: MatDialog) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.dataSource = new MatTableDataSource<Course>(this.courses);
    });
  }

  editCourse(course: Course) {
    const dialogRef = this.dialog.open(EditCourseDialogComponent, {
      data: course
    });
  }

  deleteCourse(idCourse: number) {
    this.courseService.deleteCourse(idCourse);
  }
}

