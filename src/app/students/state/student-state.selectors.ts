import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentState from './student-state.reducer';

export const selectStudentState = createFeatureSelector<fromStudentState.StudentState>(
  fromStudentState.studentStateFeatureKey
);

export const selectLoadingStudents = createSelector(
  selectStudentState,
  (state: fromStudentState.StudentState) => state.loading
);

export const selectLoadedStudents = createSelector(
  selectStudentState,
  (state: fromStudentState.StudentState) => state.students
);