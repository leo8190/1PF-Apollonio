import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClass from './class.reducer';

export const selectClassState = createFeatureSelector<fromClass.State>(
  fromClass.classFeatureKey
);
