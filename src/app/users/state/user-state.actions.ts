import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const loadUserState = createAction(
  '[UserState] Load UserStates'
);

export const loadedUsers = createAction(
  '[UserState] Loaded users',
  props<{ users: User[] }>()
);

export const addUserState = createAction(
  '[UserState] Add user',
  props<{ user: User }>()
);

export const editUserState = createAction(
  '[UserState] Edit user',
  props<{ user: User }>()
);

export const deleteUserState = createAction(
  '[UserState] Delete user',
  props<{ user: User }>()
);

