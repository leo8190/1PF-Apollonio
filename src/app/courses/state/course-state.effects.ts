import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Course } from "src/app/courses/model/course.model";
import { CourseService } from "src/app/courses/service/course.service";
import { addCourseState, loadCourseState, loadedCourses, editCourseState, deleteCourseState } from "./course-state.actions";

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCourseState),
      concatMap(() => {
        return this.courses.getCourses().pipe(
          map((c: Course[]) => loadedCourses({ courses: c }))
        )
      })
    )
  });
  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCourseState),
      concatMap(({ course }) => {
        return this.courses.addCourse(course).pipe(
          map((course: Course) => {
            this.router.navigate(['courses/list']);
            return loadCourseState();
          })
        )
      })
    );
  });
  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteCourseState),
      concatMap(({ course }) => {
        return this.courses.deleteCourse(course.id).pipe(
          map((course: Course) => {
            return loadCourseState();
          })
        )
      })
    )
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editCourseState),
      concatMap(({ course }) => {
        return this.courses.saveChanges(course).pipe(
          map((course: Course) => {
            return loadCourseState();
          })
        )
      })
    );
  });

  constructor(
    private courses: CourseService,
    private actions$: Actions,
    private router: Router
  ) { }
}