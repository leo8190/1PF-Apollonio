import { createReducer, on } from '@ngrx/store';
import { User } from '../../users/model/user.model';
import * as UserStateActions from './user-state.actions';

export const userStateFeatureKey = 'userState';

export interface UserState {
  loading: boolean;
  users: User[];
}

export const initialState: UserState = {
  loading: false,
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserStateActions.loadUserState, (state) => {
    return { ...state, loading: true };
  }),
  on(UserStateActions.loadedUsers, (state, { users }) => {
    return { ...state, loading: false, users };
  }),
  on(UserStateActions.addUserState, (state, { user: User }) => {
    return state;
  }),
  on(UserStateActions.editUserState, (state, { user: User }) => {
    return state;
  }),
  on(UserStateActions.deleteUserState, (state, { user: User }) => {
    return state;
  }),
);