import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { User } from "src/app/users/model/user.model";
import { UserService } from "src/app/users/services/user.service";
import { addUserState, loadUserState, loadedUsers, editUserState, deleteUserState } from "./user-state.actions";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserState),
      concatMap(() => {
        return this.users.getUsers().pipe(
          map((c: User[]) => loadedUsers({ users: c }))
        )
      })
    )
  });
  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUserState),
      concatMap(({ user }) => {
        return this.users.addUser(user).pipe(
          map((user: User) => {
            this.router.navigate(['users/list']);
            return loadUserState();
          })
        )
      })
    );
  });
  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUserState),
      concatMap(({ user }) => {
        return this.users.deleteUser(user.id).pipe(
          map((user: User) => {
            return loadUserState();
          })
        )
      })
    )
  });

  editUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editUserState),
      concatMap(({ user }) => {
        return this.users.saveChanges(user).pipe(
          map((user: User) => {
            return loadUserState();
          })
        )
      })
    );
  });

  constructor(
    private users: UserService,
    private actions$: Actions,
    private router: Router
  ) { }
}