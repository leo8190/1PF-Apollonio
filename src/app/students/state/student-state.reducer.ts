import { createReducer, on } from '@ngrx/store';
import { Student } from '../../students/model/student.model';
import * as StudentStateActions from './student-state.actions';

export const studentStateFeatureKey = 'studentState';

export interface StudentState {
  loading: boolean;
  students: Student[];
}

export const initialState: StudentState = {
  loading: false,
  students: []
};

export const reducer = createReducer(
  initialState,
  on(StudentStateActions.loadStudentState, (state) => {
    return { ...state, loading: true };
  }),
  on(StudentStateActions.loadedStudents, (state, { students }) => {
    return { ...state, loading: false, students };
  }),
  on(StudentStateActions.addStudentState, (state, { student: Student }) => {
    return state;
  }),
  on(StudentStateActions.editStudentState, (state, { student: Student }) => {
    return state;
  }),
  on(StudentStateActions.deleteStudentState, (state, { student: Student }) => {
    return state;
  }),
);