import { createFeature, createReducer, on } from '@ngrx/store';
import * as InscriptionActions from './inscription.actions';

export const inscriptionFeatureKey = 'inscription';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(InscriptionActions.loadInscriptions, state => state),

);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

