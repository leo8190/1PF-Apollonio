import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Inscription } from "src/app/inscriptions/model/inscription.model";
import { InscriptionService } from "src/app/inscriptions/service/inscription.service";
import { addInscriptionState, loadInscriptionState, loadedInscriptions, editInscriptionState, deleteInscriptionState } from "./inscription-state.actions";

@Injectable()
export class InscriptionsEffects {
  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadInscriptionState),
      concatMap(() => {
        return this.inscriptions.getInscriptions().pipe(
          map((c: Inscription[]) => loadedInscriptions({ inscriptions: c }))
        )
      })
    )
  });
  addInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addInscriptionState),
      concatMap(({ inscription }) => {
        return this.inscriptions.addInscription(inscription).pipe(
          map((inscription: Inscription) => {
            this.router.navigate(['inscriptions/list']);
            return loadInscriptionState();
          })
        )
      })
    );
  });
  deleteInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteInscriptionState),
      concatMap(({ inscription }) => {
        return this.inscriptions.deleteInscription(inscription.id).pipe(
          map((inscription: Inscription) => {
            return loadInscriptionState();
          })
        )
      })
    )
  });

  editInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editInscriptionState),
      concatMap(({ inscription }) => {
        return this.inscriptions.saveChanges(inscription).pipe(
          map((inscription: Inscription) => {
            return loadInscriptionState();
          })
        )
      })
    );
  });

  constructor(
    private inscriptions: InscriptionService,
    private actions$: Actions,
    private router: Router
  ) { }
}