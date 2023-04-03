import { createFeature, createReducer, on } from '@ngrx/store';
import * as ClassActions from './class.actions';

export const classFeatureKey = 'class';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(ClassActions.loadClasss, state => state),

);

export const classFeature = createFeature({
  name: classFeatureKey,
  reducer,
});

