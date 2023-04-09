import { createAction, props } from '@ngrx/store';
import { Inscription } from '../model/inscription.model';

export const loadInscriptionState = createAction(
  '[InscriptionState] Load InscriptionStates'
);

export const loadedInscriptions = createAction(
  '[InscriptionState] Loaded inscriptions',
  props<{ inscriptions: Inscription[] }>()
);

export const addInscriptionState = createAction(
  '[InscriptionState] Add inscription',
  props<{ inscription: Inscription }>()
);

export const editInscriptionState = createAction(
  '[InscriptionState] Edit inscription',
  props<{ inscription: Inscription }>()
);

export const deleteInscriptionState = createAction(
  '[InscriptionState] Delete inscription',
  props<{ inscription: Inscription }>()
);

