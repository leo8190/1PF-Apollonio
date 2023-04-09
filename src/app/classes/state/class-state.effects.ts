import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Class } from "src/app/classes/model/class.model";
import { ClassService } from "src/app/classes/service/class.service";
import { addClassState, loadClassState, loadedClasses, editClassState, deleteClassState } from "./class-state.actions";

@Injectable()
export class ClassesEffects {
  loadClasses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadClassState),
      concatMap(() => {
        return this.classes.getClasses().pipe(
          map((c: Class[]) => loadedClasses({ classes: c }))
        )
      })
    )
  });
  addClass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addClassState),
      concatMap(({ class$ }) => {
        return this.classes.addClass(class$).pipe(
          map((class$: Class) => {
            this.router.navigate(['classes/list']);
            return loadClassState();
          })
        )
      })
    );
  });
  deleteClass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteClassState),
      concatMap(({ class$ }) => {
        return this.classes.deleteClass(class$.id).pipe(
          map((class$: Class) => {
            return loadClassState();
          })
        )
      })
    )
  });

  editClass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editClassState),
      concatMap(({ class$ }) => {
        return this.classes.saveChanges(class$).pipe(
          map((class$: Class) => {
            return loadClassState();
          })
        )
      })
    );
  });

  constructor(
    private classes: ClassService,
    private actions$: Actions,
    private router: Router
  ) { }
}