import { createAction, props } from '@ngrx/store';
import { Class } from '../model/class.model';

export const loadClassState = createAction(
  '[ClassState] Load ClassStates'
);

export const loadedClasses = createAction(
  '[ClassState] Loaded classs',
  props<{ classes: Class[] }>()
);

export const addClassState = createAction(
  '[ClassState] Add class',
  props<{ class$: Class }>()
);

export const editClassState = createAction(
  '[ClassState] Edit class',
  props<{ class$: Class }>()
);

export const deleteClassState = createAction(
  '[ClassState] Delete class',
  props<{ class$: Class }>()
);

