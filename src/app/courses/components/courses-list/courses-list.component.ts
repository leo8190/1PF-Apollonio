import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../courses/service/course.service';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/courses/model/course.model';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CourseState } from '../../state/course-state.reducer';
import { Store } from '@ngrx/store';
import { selectLoadingCourses, selectLoadedCourses } from '../../state/course-state.selectors';
import { loadCourseState } from '../../state/course-state.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  dataSource!: MatTableDataSource<Course>;
  suscription!: Subscription;
  columns: string[] = ['name', 'description', 'duration', 'actions'];
  loading$!: Observable<Boolean>;
  courses$!: Observable<Course[]>;

  constructor(private courseService: CourseService, private dialog: MatDialog, private store: Store<CourseState>) { }

  ngOnInit() {
    this.store.dispatch(loadCourseState());

    this.loading$ = this.store.select(selectLoadingCourses);

    this.courseService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.dataSource = new MatTableDataSource<Course>();

    this.courses$ = this.store.select(selectLoadedCourses);

    let courses = this.courses$.subscribe((courses: Course[]) => {
      this.dataSource.data = courses;
    });

    this.suscription = courses;
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Course>();

    this.suscription = this.courseService.getCourses().subscribe((cursos: Course[]) => {
      this.dataSource.data = cursos;
    });

    this.dialog.closeAll();
  }

  editCourse(course: Course) {
    this.dialog.open(EditCourseDialogComponent, {
      data: course
    });
  }

  deleteCourse(idCourse: number) {
    this.courseService.deleteCourse(idCourse);
    alert("Press accept to finish with the delete");
    this.refresh();
  }
}

