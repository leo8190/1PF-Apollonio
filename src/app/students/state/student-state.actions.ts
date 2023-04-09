import { createAction, props } from '@ngrx/store';
import { Student } from '../model/student.model';

export const loadStudentState = createAction(
  '[StudentState] Load StudentStates'
);

export const loadedStudents = createAction(
  '[StudentState] Loaded students',
  props<{ students: Student[] }>()
);

export const addStudentState = createAction(
  '[StudentState] Add student',
  props<{ student: Student }>()
);

export const editStudentState = createAction(
  '[StudentState] Edit student',
  props<{ student: Student }>()
);

export const deleteStudentState = createAction(
  '[StudentState] Delete student',
  props<{ student: Student }>()
);

