import * as fromInscription from './inscription.reducer';
import { selectInscriptionState } from './inscription.selectors';

describe('Inscription Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInscriptionState({
      [fromInscription.inscriptionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
