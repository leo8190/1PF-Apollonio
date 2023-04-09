import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Student } from "src/app/students/model/student.model";
import { StudentService } from "src/app/students/service/student.service";
import { addStudentState, loadStudentState, loadedStudents, editStudentState, deleteStudentState } from "./student-state.actions";

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStudentState),
      concatMap(() => {
        return this.students.getStudents().pipe(
          map((c: Student[]) => loadedStudents({ students: c }))
        )
      })
    )
  });
  addStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addStudentState),
      concatMap(({ student }) => {
        return this.students.addStudent(student).pipe(
          map((student: Student) => {
            this.router.navigate(['students/list']);
            return loadStudentState();
          })
        )
      })
    );
  });
  deleteStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteStudentState),
      concatMap(({ student }) => {
        return this.students.deleteStudent(student.id).pipe(
          map((student: Student) => {
            return loadStudentState();
          })
        )
      })
    )
  });

  editStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editStudentState),
      concatMap(({ student }) => {
        return this.students.saveChanges(student).pipe(
          map((student: Student) => {
            return loadStudentState();
          })
        )
      })
    );
  });

  constructor(
    private students: StudentService,
    private actions$: Actions,
    private router: Router
  ) { }
}