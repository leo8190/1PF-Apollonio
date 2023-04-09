import { createReducer, on } from '@ngrx/store';
import { Class } from '../../classes/model/class.model';
import * as ClassStateActions from './class-state.actions';

export const classStateFeatureKey = 'classState';

export interface ClassState {
  loading: boolean;
  classes: Class[];
}

export const initialState: ClassState = {
  loading: false,
  classes: []
};

export const reducer = createReducer(
  initialState,
  on(ClassStateActions.loadClassState, (state) => {
    return { ...state, loading: true };
  }),
  on(ClassStateActions.loadedClasses, (state, { classes }) => {
    return { ...state, loading: false, classes };
  }),
  on(ClassStateActions.addClassState, (state, { class$: Class }) => {
    return state;
  }),
  on(ClassStateActions.editClassState, (state, { class$: Class }) => {
    return state;
  }),
  on(ClassStateActions.deleteClassState, (state, { class$: Class }) => {
    return state;
  }),
);