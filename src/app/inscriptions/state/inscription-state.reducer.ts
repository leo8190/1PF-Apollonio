import { createReducer, on } from '@ngrx/store';
import { Inscription } from '../model/inscription.model';
import * as InscriptionStateActions from './inscription-state.actions';

export const inscriptionStateFeatureKey = 'inscriptionState';

export interface InscriptionState {
  loading: boolean;
  inscriptions: Inscription[];
}

export const initialState: InscriptionState = {
  loading: false,
  inscriptions: []
};

export const reducer = createReducer(
  initialState,
  on(InscriptionStateActions.loadInscriptionState, (state) => {
    return { ...state, loading: true };
  }),
  on(InscriptionStateActions.loadedInscriptions, (state, { inscriptions }) => {
    return { ...state, loading: false, inscriptions };
  }),
  on(InscriptionStateActions.addInscriptionState, (state, { inscription: Inscription }) => {
    return state;
  }),
  on(InscriptionStateActions.editInscriptionState, (state, { inscription: Inscription }) => {
    return state;
  }),
  on(InscriptionStateActions.deleteInscriptionState, (state, { inscription: Inscription }) => {
    return state;
  }),
);