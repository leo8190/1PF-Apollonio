import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserState from './user-state.reducer';

export const selectUserState = createFeatureSelector<fromUserState.UserState>(
  fromUserState.userStateFeatureKey
);

export const selectLoadingUsers = createSelector(
  selectUserState,
  (state: fromUserState.UserState) => state.loading
);

export const selectLoadedUsers = createSelector(
  selectUserState,
  (state: fromUserState.UserState) => state.users
);