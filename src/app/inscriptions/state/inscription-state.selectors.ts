import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscriptionState from './inscription-state.reducer';

export const selectInscriptionState = createFeatureSelector<fromInscriptionState.InscriptionState>(
  fromInscriptionState.inscriptionStateFeatureKey
);

export const selectLoadingInscriptions = createSelector(
  selectInscriptionState,
  (state: fromInscriptionState.InscriptionState) => state.loading
);

export const selectLoadedInscriptions = createSelector(
  selectInscriptionState,
  (state: fromInscriptionState.InscriptionState) => state.inscriptions
);