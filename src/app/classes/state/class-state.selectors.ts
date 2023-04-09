import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClassState from './class-state.reducer';

export const selectClassState = createFeatureSelector<fromClassState.ClassState>(
  fromClassState.classStateFeatureKey
);

export const selectLoadingClasses = createSelector(
  selectClassState,
  (state: fromClassState.ClassState) => state.loading
);

export const selectLoadedClasses = createSelector(
  selectClassState,
  (state: fromClassState.ClassState) => state.classes
);